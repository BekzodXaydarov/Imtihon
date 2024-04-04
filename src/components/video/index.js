import { useRef, useState } from "react";
import play from '../../assets/images/play-button-svgrepo-com 1.png'


const VideoComponent = ({ src, ...props }) => {
  const [player, setPlayer] = useState(false)
  const refVideo = useRef();
  const handlePlay = () => {
    if (refVideo.current.paused) {
      refVideo.current.play();
      setPlayer(!player)
    } else {
      refVideo.current.pause();
      setPlayer(!player)
    }
  };
  return (
    <div >
      <video ref={refVideo} src={src} {...props} onClick={handlePlay} />
      <img className='play' onClick={handlePlay} src={player ? "" : play} alt="" />
    </div>
  );
};

export default VideoComponent;

