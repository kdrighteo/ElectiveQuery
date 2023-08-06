import React from 'react'

export default function QueryBox() {
  return (
    <div className=" flex justify-center mt-0">
      <div className="bg-blue-100">
        <div className=" grid grid-rows-3 gap-4 place-items-center ">
          <div className="grid-rows-1 space-x-3">
            <label> Student ID </label>
            <input
              type="text"
              placeholder="0123456789"
              className=" text-center"
            />

            <label>Programme </label>
            <input
              type="text"
              placeholder="Bsc Mathematics"
              className="text-center"
            />
          </div>

          <div className="grid-rows-1 space-x-3">
            <label> Level </label>
            <input type="text" placeholder="L300" className="text-center" />
          </div>

          <div className=" grid-rows-1 bg-blue-900 text-white rounded-sm w-64 text-center hover:bg-sky-700 font-bold">
            <button className="">Query</button>
          </div>
        </div>
      </div>
    </div>
  );
}
