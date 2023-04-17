import React from 'react'

function Card(props) {
  return (
    <React.Fragment>
    <div className="mx-10">
        <div className='flex'>
            <p className='text-gray-600'>{props.title}</p>
        </div>

        <div className='flex items-center'>
            <p className='text-2xl text-black font-sans flex-1 text-left'>{props.value}</p>

            <div className='inline-flex items-center py-0.5 px-1 bg-emerald-400/[0.23] rounded-lg'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 6.33334L8.2 9.13334L7.13333 7.53334L5 9.66668" stroke="#608662" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.66667 6.33334H11V7.66668" stroke="#608662" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.99999 14.6667H9.99999C13.3333 14.6667 14.6667 13.3333 14.6667 10V6.00001C14.6667 2.66668 13.3333 1.33334 9.99999 1.33334H5.99999C2.66666 1.33334 1.33333 2.66668 1.33333 6.00001V10C1.33333 13.3333 2.66666 14.6667 5.99999 14.6667Z" stroke="#608662" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="ml-2 text-[#608662]">{props.percentage}%</p>
            </div>
        </div>

        <hr class="border-gray-400/[0.20] my-6"></hr>
    </div>
    </React.Fragment>
  )
}

export default Card