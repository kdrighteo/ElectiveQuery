import React from "react";

export default function QueryPage() {
  return (
    <div className=" flex justify-center ">
      <div className=" grid grid-cols-2 gap-6 ">
        <div className=" grid-cols-1 grid place-items-center">
          <img src="UoG.png" width={200} />
        </div>

        <div className=" grid grid-cols-1 ">
          <div className=" grid mb-6 text-center ring-2 ring-blue-500">
            <div>
              <img />
            </div>
            <div>
              <label>Name: Mr. DANSO</label>
            </div>
            <div>
              <label>Level: 400</label>
            </div>
            <div>
              <label>Prog: BSc CompSci</label>
            </div>
          </div>
          <table class="table-auto ring-2 ring-blue-500 text-center">
            <caption class="caption-bottom mt-4">
              Table 3.1: Electives for nth Semester.
              <div className=" flex w-full justify-center mt-4 font-semibold">
                <div className=" bg-green-500 w-52 border rounded-md">
                  <a href="#">
                    <button>
                      <h2>proceed to Registration...</h2>
                    </button>
                  </a>
                </div>
                <div className=" ml-2 w-16 border rounded-md bg-orange-800">
                  <a href="#">
                    <button>
                      <h2>Logout</h2>
                    </button>
                  </a>
                </div>
              </div>
            </caption>
            <thead className=" bg-white">
              <tr>
                <th>Credit</th>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Tutor</th>
              </tr>
            </thead>
            <tbody className=" bg-white">
              <tr>
                <td>3</td>
                <td>DCIT 401</td>
                <td>Expert Systems</td>
                <td>Dr. Owusu</td>
              </tr>
              <tr>
                <td>3</td>
                <td>DCIT 426</td>
                <td>Programming III</td>
                <td>Mr. Aziz</td>
              </tr>
              <tr>
                <td>3</td>
                <td>DCIT 409</td>
                <td>Mobile Application</td>
                <td>Dr. Paul</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
