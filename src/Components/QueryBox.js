import React from "react";

export default function QueryBox() {
  return (
    <div className=" flex justify-center mt-0">
      <div className="bg-blue-100">
        <div className=" grid grid-rows-4 gap-4 place-items-center ">
          <div className="grid-rows-1 space-x-3">
            <label> Student ID:</label>
            <input
              type="number"
              placeholder="10721212"
              className=" text-center"
            />
          </div>

          <div>
            <form>
              <label>Programme: </label>
              <select className=" text-center">
                <option value="CS">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Politics">Political Science</option>
                <option value="Sociology">Sociology</option>
                <option value="Dance">Dance</option>
              </select>
            </form>
          </div>

          <div className="grid-rows-1 space-x-3">
            <form>
              <label>Level: </label>
              <select>
                <option value="L1">100</option>
                <option value="L2">200</option>
                <option value="L3">300</option>
                <option value="L4">400</option>
                <option value="MSc">600</option>
                <option value="PhD">700</option>
              </select>
            </form>
          </div>

          <div className=" grid-rows-1 bg-blue-900 text-white rounded-r-full w-36 text-center hover:bg-sky-700 font-bold">
            <button className="">Query</button>
          </div>
        </div>
      </div>
    </div>
  );
}
