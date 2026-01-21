import React from 'react'
//import { Navbar, Welcome } from '#components'; //index.js specifically doesn't need to be called
import Navbar from '#components/Navbar.jsx';
import Welcome from '#components/Welcome.jsx';
import Dock from '#components/Doc.jsx';

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome / >
      <Dock />
    </main>
  );
};

export default App