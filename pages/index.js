import React from 'react'
import { allAlgorithms } from '../utilsAndData/algorithms'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col px-3 w-full min-h-screen bg-slate-200'>
      <div className='flex flex-col items-center justify-center border border-black'>

        <div className='border border-red-500 w-2/3 flex flex-wrap justify-evenly'>
        {allAlgorithms.map(algo => {
          return (
            <div onClick={() => {router.push(`/${algo.name.split(" ").join("")}`)}} className='w-[calc(33.33333%-1rem)] border border-green-400 flex justify-center items-center h-20 rounded-xl my-2'>
              {algo.name}
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default Home