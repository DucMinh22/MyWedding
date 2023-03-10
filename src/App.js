import React, { Suspense } from 'react';

const Bridegroom = React.lazy(() => import('./components/Bridegroom'));
const Footer = React.lazy(() => import('./components/Footer'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Header = React.lazy(() => import('./components/Header'));
const RSVP = React.lazy(() => import('./components/RSVP'));
const Seeyou = React.lazy(() => import('./components/Seeyou'));
const Sidebar = React.lazy(() => import('./components/Sidebar'));
const Story = React.lazy(() => import('./components/Story'));
const Where = React.lazy(() => import('./components/Where'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Bridegroom />
        <Where />
        <Story />
        <Seeyou />
        <Gallery />
        <RSVP />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;

