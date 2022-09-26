import React, { useRef, useEffect, useState } from 'react'
import { returnUnsortedArray } from '../utilsAndData/algorithms';
const Canvas = props => {

    const [ sortArray, setSortArray ] = useState(returnUnsortedArray(500));
    const [ startSort, setStartSort ] = useState(false);
    
  const canvasRef = useRef(null)

  const drawLine = (ctx, x1, y1, x2,y2, stroke = 'black', width = 1) => {
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

  let canvas;
  let context;
  
  useEffect(() => {
    canvas = canvasRef.current
    context = canvas.getContext('2d')
    //Our first draw
    console.log(context);

    for(let i = 0; i < 500; i++){
        drawLine(context, i, 500, i, 500 - sortArray[i])
    }

  }, [])

  useEffect(() => {
    for(let i = 0; i < 500; i++){
      drawLine(context, i, 500, i, 500 -sortArray[i])
    }
  }, [sortArray])

  const performSort = () => {
    
    let inputArr = [...sortArray];

    let n = inputArr.length;

    console.log(inputArr);


    //
    for(let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for(let j = i+1; j < n; j++){
          if(inputArr[j] < inputArr[min]) {
              min=j; 
          }
       }
       if (min != i) {
           // Swapping the elements
           let tmp = inputArr[i]; 
           inputArr[i] = inputArr[min];
           inputArr[min] = tmp;      
      }
  }

  console.log(inputArr)
  setSortArray(inputArr)

    // const arrayCopy = [...sortArray]
    // console.log('array before sort')
    // console.log(arrayCopy);

    
    // for(let i = 0; i < arrayCopy.length; i++){
    //   let min = i;

    //   for(let ii = i+1; ii < arrayCopy.length; ii++){
    //     if(arrayCopy[ii] < arrayCopy[i]){
    //       min = ii;
    //     }
    //   }

    //   if(min != i){
    //     let placeHolder = arrayCopy[i];
    //     arrayCopy[i] = arrayCopy[min];
    //     arrayCopy[min] = placeHolder;
    //   }
    // }

    // console.log('array after sort');
    // console.log(arrayCopy);


    
  }
  useEffect(() => {

  }, [sortArray]); 

  
  
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
        <div className='w-4/5 border border-black min-h-screen'>
            <canvas height='500' width='1000' ref={canvasRef} {...props}/>

        </div>

        <button onClick={performSort}>Start Sort</button>

    </div>

  )
}

export default Canvas