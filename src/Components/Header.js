import React from 'react'

export default function Header() {
  return (
    <div className=" flex justify-between h-10 bg-blue-900 text-white text-center font-bold min-w-full md:min-w-0">
      <div className=" flex items-center ml-4">
        <img src="UoG.png" width="25" alt="" />
      </div>
      <div className=" text-2xl hover:bg-sky-700">
        <h3>ElectiveQuery</h3>
      </div>

      <div className=" mr-4">
        <h3>...</h3>
      </div>
    </div>
  );
}
