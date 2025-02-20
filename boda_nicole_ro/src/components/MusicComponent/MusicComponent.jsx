import "react";
import music from '../../assets/audio/music1.mp3';

const MusicComponent = () => {
    return (
        <div>
            <audio id="background-music" loop autoPlay>
                <source src={music} type="audio/mp3" />
                Tu navegador no soporta el elemento audio.
            </audio>
        </div>
    );
};

export default MusicComponent;
