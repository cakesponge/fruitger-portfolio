import React from 'react'
//import { Navbar, Welcome } from '#components'; //index.js specifically doesn't need to be called
import Navbar from '#components/Navbar.jsx';
import Welcome from '#components/Welcome.jsx';

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome / >
    </main>
  );
};

export default App