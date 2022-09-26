import React, { useEffect, useState } from 'react'
import { returnUnsortedArray } from '../utilsAndData/algorithms'

const RecursiveBubbleSort = () => {

  const [arrayBeingSorted, setArrayBeingSorted] = useState([]);

  useEffect(() => {
    const scrambledArray = returnUnsortedArray(1000);

    setArrayBeingSorted(scrambledArray);
  }, [])

  useEffect(() => {
    console.log('State: ', arrayBeingSorted);
  }, [arrayBeingSorted])

  const startSort = e => {

  }

  return (
    <div className='w-full min-h-screen bg-green-200'>

    </div>
  )
}

export default RecursiveBubbleSort