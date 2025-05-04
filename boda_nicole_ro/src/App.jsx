import { useState } from "react";
import PassportSection from "./components/PassportSection/PassportSection";
import Story from "./components/Story/story";
import InvitationCard from "./components/InvitationCard/InvitationCard";
import Location from "./components/Location/Location";
import ConfirmAttendance from "./components/ConfirmAttendance/ConfirmAttendance";
import GiftSection from "./components/GiftSection/GiftSection";
import Itinerary from "./components/Itinerary/Itinerary";
import Gallery from "./components/Gallery/Gallery";
import Summary from "./components/Summary/Summary";
import MusicComponent from "./components/MusicComponent/MusicComponent";
// import MusicPrompt from './components/MusicPrompt/MusicPrompt'; // El componente que pregunta

function App() {
  const [isMusicEnabled, setIsMusicEnabled] = useState(false);
  const [isMusicPromptVisible, setIsMusicPromptVisible] = useState(true);

  const handleMusicStart = (shouldPlay) => {
    setIsMusicEnabled(shouldPlay);
    setIsMusicPromptVisible(false); // Oculta el prompt después de la selección
  };

  return (
    <div>
      {/* Solo muestra el MusicPrompt si no se ha respondido */}
      {/* {isMusicPromptVisible && <MusicPrompt onMusicStart={handleMusicStart} />} */}

      {/* Si la música está habilitada, muestra el componente MusicComponent */}
      {isMusicEnabled && <MusicComponent />}

      {/* Las demás secciones solo se muestran si se ha respondido al prompt */}
      {!isMusicPromptVisible || (
        <>
          <PassportSection />
          <Story />
          <InvitationCard />
          <Location />
          <ConfirmAttendance />
          <GiftSection />
          <Itinerary />
          <Gallery />
          <Summary />
        </>
      )}
    </div>
  );
}

export default App;
