import React from 'react'


const Loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black overflow-x-hidden overflow-y-hidden'>
        <img className='h-[60%] object-cover' src="/loading_02.gif" alt="" />
    </div>
  )
}

export default Loading