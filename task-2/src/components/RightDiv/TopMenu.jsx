import React from 'react'

function TopMenu() {
  return (
    <React.Fragment>
    <div className="flex mt-4">

        <div className="flex mx-5 flex-1">
            <input type="text" placeholder="Search" className='bg-[#F8F8F8] px-3 w-60 h-10 rounded active:border-white' />
        </div>

        <div className="flex items-center gap-2 mx-5">

            <div className='p-2 bg-[#ECECEC]/[0.50] rounded-full'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5.36667V8.14167" stroke="#131313" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M10.0167 1.66666C6.95001 1.66666 4.46667 4.14999 4.46667 7.21666V8.96666C4.46667 9.53332 4.23334 10.3833 3.94167 10.8667L2.88334 12.6333C2.23334 13.725 2.68334 14.9417 3.88334 15.3417C7.86667 16.6667 12.175 16.6667 16.1583 15.3417C17.2833 14.9667 17.7667 13.65 17.1583 12.6333L16.1 10.8667C15.8083 10.3833 15.575 9.52499 15.575 8.96666V7.21666C15.5667 4.16666 13.0667 1.66666 10.0167 1.66666Z" stroke="#131313" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M12.775 15.6833C12.775 17.2083 11.525 18.4583 10 18.4583C9.24167 18.4583 8.54167 18.1417 8.04167 17.6417C7.54167 17.1417 7.22501 16.4417 7.22501 15.6833" stroke="#131313" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>
            </div>

            <img src="https://i.imgur.com/5qyFPWF.png" alt="" className='h-8'/>


            <div className="rounded-lg flex items-center gap-3 px-2">
            <p className="text-lg">Jacob Frost</p>

          <div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25002 12.8333H8.75002C11.6667 12.8333 12.8334 11.6667 12.8334 8.74999V5.24999C12.8334 2.33332 11.6667 1.16666 8.75002 1.16666H5.25002C2.33335 1.16666 1.16669 2.33332 1.16669 5.24999V8.74999C1.16669 11.6667 2.33335 12.8333 5.25002 12.8333Z"
                stroke="#131313"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.94086 6.20667L7.00002 8.26L9.05919 6.20667"
                stroke="#131313"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        </div>

    </div>
    </React.Fragment>
  )
}

export default TopMenu