import PassportSection from './components/PassportSection/PassportSection';
import Story from './components/Story/story';
import InvitationCard from './components/InvitationCard/InvitationCard';
import Location from './components/Location/Location';
import ConfirmAttendance from './components/ConfirmAttendance/ConfirmAttendance';
import GiftSection from './components/GiftSection/GiftSection';
import Itinerary from './components/Itinerary/Itinerary';
import Gallery from './components/Gallery/Gallery';
import Summary from './components/Summary/Summary';

function App() {
  return (
    <div>
      <PassportSection />
      <Story />
      <InvitationCard />
      <Location />
      <ConfirmAttendance />
      <GiftSection />
      <Itinerary />
      <Gallery />
      <Summary />
    </div>
  );
}

export default App;
