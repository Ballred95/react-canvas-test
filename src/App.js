import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const canvasRef =  useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setDrawing] = useState(false)


  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const context = canvas.getContext('2d')
    context.scale(2,2)
    context.lineCap= 'round'
    context.strokeStyle = 'black'
    context.lineWidth= 5
  }, [])

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent
    contextRef.current.beingPath()
    contextRef.current.moveTo(offsetX, offsetY)
    isDrawing(true)
  }

  const finishDrawing = () => {
    isDrawing(false)
  }

  const draw = () => {

  }

  return (
    <div className="App">
      <canvas
      onMouseDown={startDrawing}
      onMouseUp = {finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
      />
    </div>
  );
}

export default App;
