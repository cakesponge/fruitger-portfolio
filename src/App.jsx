import React from 'react'
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

//import { Navbar, Welcome } from '#components'; //index.js specifically doesn't need to be called
import Navbar from '#components/Navbar.jsx';
import Welcome from '#components/Welcome.jsx';
import Dock from '#components/Doc.jsx';
import Terminal from '#windows/terminal.jsx';

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome / >
      <Dock />

      <Terminal />
    </main>
  );
};

export default App