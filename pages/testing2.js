import React, { useRef, useEffect, useState } from 'react'
import { returnUnsortedArray } from '../utilsAndData/algorithms';
const Canvas = props => {

    let canvas;
    let context;  

    const [ sortArray, setSortArray ] = useState(returnUnsortedArray(200));
    const [ startSort, setStartSort ] = useState(false);
    
  const canvasRef = useRef(null)

  const drawRect = (x, y, width, height, color = 'black') => {
    context.fillStyle = color;
    context.fillRect(x, y, width, height)
  }
  
  useEffect(() => {
    canvas = canvasRef.current
    context = canvas.getContext('2d')
    //Our first draw

    for(let i = 0; i < sortArray.length; i++){
        drawRect(i * 5, 500 - sortArray[i], 5, sortArray[i])
    }

    setTimeout(() => {
      highlight(120)
    }, 2000)

  }, [])

  const highlight = (index) => {
    canvas = canvasRef.current
    context = canvas.getContext('2d');
    
    drawRect(index*5, 500 - sortArray[index], 5, sortArray[index], 'red');
  }

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
        <div className='w-4/5 border border-black min-h-screen'>
            <canvas height='500' width='1000' ref={canvasRef} {...props}/>

        </div>

        <button onClick={highlight}>Start Sort</button>

    </div>

  )
}

export default Canvas