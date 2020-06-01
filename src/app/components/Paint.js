import React, { useState, useRef } from 'react'
import Name from './Name'
import Canvas from './Canvas'
import useWindowSize from './WindowSize'
import ColorPicker2 from './ColorPicker2'

import '../../style.css';

export default function Paint() {
  const [activeColor, setActiveColor] = useState('#ff0000')
  const [size, setSize] = useState(10);

  function handleChange(event) {
    setSize({value: event.target.value});
  }

  return (
    <div className="app">
      <div className="split feft">
        <header style={{ borderTop: `10px solid ${activeColor}` }}>
          <div>
            <Name />
            <input type="text" value={size} onChange={e => setSize(e.target.value)}/>
          </div>
          <div>
            <ColorPicker2
              color={activeColor}
              onChangeComplete = { (activeColor) => {setActiveColor(activeColor.hex)} }
            />
          </div>
        </header>
        <div className="split right">
          {activeColor && (
            <Canvas
              color={activeColor}
              height={600}
              size={size}
            />
          )}
        </div>
      </div>
    </div>
  )
}
