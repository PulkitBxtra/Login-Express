import React from 'react'

function cards(props) {

    console.log(props);

  return (
    <div className="mt-5">
        <div className='flex flex-row justify-start ml-[60px]  gap-5 cursor-pointer'>
            <div>
                <img src={`${props.src}`} alt="" />
            </div>
            <div className="text-gray-300 text-lg -mt-1">{props.title}</div>
        </div>
    </div>
  )
}

export default cards