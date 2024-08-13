import React from "react";

function AddEmployee() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <section class=" py-1 bg-blueGray-50" />
      <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 ">
          <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
              <h6 class="text-blueGray-700 text-xl font-bold ">
                Employee Details
              </h6>
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-0 py-10 pt-0">
            <form>
              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Personal Information
              </h6>
              <div className="flex flex-row">
                <div class="border border-dashed border-gray-500 relative">
                  <input
                    type="file"
                    multiple
                    class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
                  />
                  <div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                    <h4>upload photo</h4>
                  </div>
                </div>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>

                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <hr class="mt-6 border-b-1 border-blueGray-300" />

              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Contact Information
              </h6>

              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="Email"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Phone Number
                    </label>
                    <input
                      type="phone"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <hr class="mt-6 border-b-1 border-blueGray-300" />

              <hr />

              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Login Information
              </h6>

              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <form class="max-w-sm mx-auto">
                    <label
                      for="roles"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Select Role
                    </label>
                    <select
                      id="roles"
                      class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="DR">Doctor</option>
                      <option value="CH">Chemist</option>
                      <option value="RE">Receptionist</option>
                    </select>
                  </form>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <hr class="mt-6 border-b-1 border-blueGray-300" />

              <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Other Information
              </h6>

              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Salary
                    </label>
                    <input
                      type="number"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Date of joining
                    </label>
                    <input
                      type="date"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                  <form class="max-w-sm mx-auto">
                    <label
                      for="Department"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Select Department
                    </label>
                    <select
                      id="Department"
                      class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="OP1">opd1</option>
                      <option value="OP2">opd2</option>
                      <option value="OP3">opd3</option>
                      <option value="REC">Reception</option>
                      <option value="CHE">Medicines</option>
                    </select>
                  </form>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlfor="grid-password"
                    >
                      Charges
                    </label>
                    <input
                      type="number"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>

              <hr class="mt-6 border-b-1 border-blueGray-300" />
              <br />
              <div>
                <button
                  type="submit"
                  class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-half sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 "
                >
                  Add Employee
                </button>
              </div>
            </form>
          </div>

          <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-6/12 px-4 mx-auto text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
