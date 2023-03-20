import Bridegroom from './components/Bridegroom';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import RSVP from './components/RSVP';
import Seeyou from './components/Seeyou';
import Sidebar from './components/Sidebar';
import Story from './components/Story';
import Where from './components/Where';

function App() {
  return (
    <>
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Bridegroom />
        <Where />
        {/* <Countdown /> */}
        <Story />
        <Seeyou />
        {/* <Organization /> */}
        <Gallery />
        <RSVP />
        <Footer />
      </div>
    </>
  );
}

export default App;