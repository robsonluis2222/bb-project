import React, { useRef, useEffect, useState } from "react";

function CameraComponent() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 1920, height: 1080 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = photoRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    setHasPhoto(true);
  };

  const closePhoto = () => {
    setHasPhoto(false);
  };

  return (
    <div className="CameraComponent">
      <div className="camera">
        <video ref={videoRef} width="100%" height="auto" />
        <button onClick={takePhoto}>SNAP!</button>
      </div>
      <div className={"result" + (hasPhoto ? " hasPhoto" : "")}>
        <canvas ref={photoRef} />
        <button onClick={closePhoto}>CLOSE!</button>
      </div>
    </div>
  );
}

export default CameraComponent;
