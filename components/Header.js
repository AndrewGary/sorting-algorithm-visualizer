import React from 'react'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter();

  return (
    <div className='w-full flex justify-center items-center h-24'>
        <div name='headerLeft' className='w-1/3 border-r'>

        </div>
        <div name='headerCenter' className='w-1/3 flex justify-center text-3xl border-x'>
            <span onClick={() => {
              router.push('/')
            }}>Sorting Algorithm Visualizer</span>
        </div>
        <div name='headerRight' className='w-1/3'>
            
        </div>
    </div>
  )
}

export default Header