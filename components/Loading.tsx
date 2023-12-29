import React from 'react'

const Loading = () => {
  return (
    <div className='h-1'>
        <div className="w-full h-1/2 rounded-sm bg-customRed dark:bg-customOrange relative overflow-hidden">
            <div className="w-1/4 h-full bg-white absolute left-0 animate-move"></div>
        </div>
    </div>
  )
}

export default Loading
