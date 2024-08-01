import React from 'react'

function Discharge() {
  return (
    <div>
      
      <div class="content">
        <h1 class="text-3xl font-bold mb-4">Discharge Patient</h1>
        <div class="mb-4">
            <input type="text" placeholder="Search by name" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></input>
        </div>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
                <thead>
                    <tr>
                        <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                        <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                        <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Bed No</th>
                        <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Medicine</th>
                        <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Diagnosis</th>
                        <th class="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-2 px-4 border-b border-gray-200">Aniket</td>
                        <td class="py-2 px-4 border-b border-gray-200">2024-06-26</td>
                        <td class="py-2 px-4 border-b border-gray-200">12</td>
                        <td class="py-2 px-4 border-b border-gray-200">Paracetamol</td>
                        <td class="py-2 px-4 border-b border-gray-200">dengu</td>
                        <td class="py-2 px-4 border-b border-gray-200">
                            <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Generate Bill</button>
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Discharge
