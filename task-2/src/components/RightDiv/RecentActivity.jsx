import React from "react";

function RecentActivity() {
  return (
    <React.Fragment>
      <div className="flex mx-7 mt-10">
        <p className="text-xl flex-1 text-left">Recent Activity</p>

        <div className="bg-[#F8F8F8] rounded-lg flex items-center gap-3 px-2">
          <p className="font-light">Last 24h</p>

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

      <div>
        <div className="flex mx-7 gap-3 mt-3">
          <div>
            <img src="https://i.imgur.com/5qyFPWF.png" alt="" />
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold">Alex Morgan </p>
            <p>Sent you a </p>
            <p className="font-bold">Message</p>
          </div>
        </div>

        <div>
          <hr class="border-gray-400/[0.20] mx-7 mt-3"></hr>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RecentActivity;
