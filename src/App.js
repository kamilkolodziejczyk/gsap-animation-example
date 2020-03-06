import React, {useRef, useEffect} from 'react';
import './App.css';
import {ReactComponent as Scene} from "./scene.svg";
import gsap from 'gsap';

function App() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const character = elements.getElementById('character');
    const chart = elements.getElementById('chart');
    const line = elements.getElementById('line');
    const points = elements.getElementById('points');
    const leaf = elements.getElementById('leaf');
    const shadow = elements.getElementById('shadow');

    gsap.set([character, chart, line, ...points.children, leaf, shadow], {autoAlpha: 0});
    gsap.set(shadow, {transformOrigin: '50% 50%'});

    gsap.timeline({defaults: {ease: 'power3.inOut'}})
      .fromTo(character, {x: '-=300'}, {duration: 1, x: '+=300', autoAlpha: 1})
      .fromTo(shadow, {scale: 0.1}, {duration: 0.8, autoAlpha: 1, scale: 1})
      .fromTo(chart, {scaleY: 0}, {duration: 0.5, scaleY: 1, autoAlpha: 1})
      .to(line, {duration: 1, autoAlpha: 1})
      .to(points.children, {duration: 0.5, autoAlpha: 1, stagger: 0.3})
      .to(leaf,{duration: 0.2, autoAlpha: 1});

  }, []);

  return (
    <div ref={wrapper} className="App">
      <Scene/>
    </div>
  );
}

export default App;
