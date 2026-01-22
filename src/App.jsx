import React from 'react'
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";


//import { Navbar, Welcome } from '#components'; //index.js specifically doesn't need to be called
import Navbar from '#components/Navbar.jsx';
import Welcome from '#components/Welcome.jsx';
import Dock from '#components/Doc.jsx';
import Terminal from '#windows/terminal.jsx';
import Safari from '#windows/Safari.jsx';
import Resume from '#windows/resume.jsx';
import Finder from '#windows/Finder.jsx';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome / >
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
    </main>
  );
};

export default App