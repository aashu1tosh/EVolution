import { useState } from 'react'
import { useEffect } from 'react';
import { Background } from './Component/Background/Background';
import { Navabar } from './Component/Navbar/Navabar';
import { Hero } from './Component/Hero/Hero';
import './App.css'

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passions" },
  ]

  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setHeroCount((c) => (c === 2 ? 0 : c + 1));
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup function to clear the interval
}, []); // Empty dependency array ensures the effect runs only once, like componentDidMount


  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navabar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </>
  )
}

export default App
