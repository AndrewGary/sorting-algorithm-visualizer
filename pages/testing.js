import React, { useRef, useEffect, useState } from 'react'
import { returnUnsortedArray } from '../utilsAndData/algorithms';
const Canvas = props => {

    const [ sortArray, setSortArray ] = useState(returnUnsortedArray(500));
    const [ startSort, setStartSort ] = useState(false);
    
  const canvasRef = useRef(null)

  const drawLine = (ctx, x1, y1, x2,y2, stroke = 'black', width = 3) => {
    // start a new path
    ctx.beginPath();

    // place the cursor from the point the line should be started 
    ctx.moveTo(x1, y1);

    // draw a line from current cursor position to the provided x,y coordinate
    ctx.lineTo(x2, y2);

    // set strokecolor
    ctx.strokeStyle = stroke;

    // set lineWidht 
    ctx.lineWidth = width;

    // add stroke to the line 
    ctx.stroke();
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    console.log(context);

    for(let i = 0; i < 500; i++){
        drawLine(context, i, 500, i, 500 - sortArray[i])
    }

    performSort();
  }, [])

  useEffect(() => {
    if(startSort){

    }
  }, [startSort])

  const performSort = () => {
      const blah = [0, 1, 2, 3, 4, 5];

    const swap = (index1, index2) => {
        let placeHolder = blah[index1];
        blah[index1] = blah[index2]
        blah[index2] = placeHolder
        
    }

    swap(0, 3);

    console.log(blah)


    
  }
  useEffect(() => {

  }, [sortArray]); 

  
  
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='w-4/5 border border-black min-h-screen'>
            <canvas height='500' width='500' ref={canvasRef} {...props}/>

        </div>

        <button onClick={() => {
            setStartSort(!startSort)
        }}></button>

    </div>

  )
}

export default Canvas