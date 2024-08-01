import React from 'react'

function AddPatient() {
  return (
    <div>
      <div class="content">
        <h1 class="text-3xl font-bold mb-4">Admit Patient</h1>
        <form class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700" for="blood-group">Blood Group</label>
                <input type="text" id="blood-group" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700" for="dob">Date of Birth</label>
                <input type="date" id="dob" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700" for="department">Department</label>
                <input type="text" id="department" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700" for="doctor">Doctor</label>
                <input type="text" id="doctor" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700" for="bed-number">Bed Number</label>
                <input type="text" id="bed-number" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700" for="diagnosis">Diagnosis</label>
                <textarea id="diagnosis" rows="3" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700" for="medicine">Medicine</label>
                <input type="text" id="medicine" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
            </div>
            <div class="flex space-x-4">
                <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add</button>
                <button type="button" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Cancel</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default AddPatient
