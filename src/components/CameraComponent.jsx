import React, { useRef } from 'react';

const CameraComponent = () => {
    const videoRef = useRef(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
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
        }
    };

    React.useEffect(() => {
        startCamera();
    }, []);

    return (
        <div>
            <video ref={videoRef} autoPlay playsInline muted style={{ maxWidth: '100%' }} />
        </div>
    );
};

export default CameraComponent;
