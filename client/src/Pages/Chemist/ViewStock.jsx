import React from 'react'

const ViewStock = () => {
  return (
    <div>
        <center><span className=' text-2xl font-bold'>MEDICAL STOCK</span></center>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className='text-lg font-semibold'>Name</th>
              <th className='text-lg font-semibold'>Price</th>
              <th className='text-lg font-semibold'>Quantity</th>
              <th className='text-lg font-semibold'>Expiry Date</th>
              <th className='text-lg font-semibold'>Details</th>
              <th className='text-lg font-semibold'>Image</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>Supradyn Daily Tablets</td>
              <td>
                500
                <br />
              </td>
              <td>100</td>
              <td>22/05/2026</td>
              <td>New Supradyn Daily Tablets contain 12 vitamins</td>

              <th>
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://www.netmeds.com/images/product-v1/150x150/963415/supradyn_daily_tablet_15s_0_1.jpg"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>Pudin Hara</td>
              <td>
                50
                <br />
              </td>
              <td>100</td>
              <td>25/07/2025</td>
              <td> Provide quick relief from stomach ailments</td>

              <th>
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://www.netmeds.com/images/product-v1/150x150/15917/dabur_pudin_hara_pearls_capsule_10_s_0.jpg"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>Saridon Advance Tablets</td>
              <td>
                100
                <br />
              </td>
              <td>200</td>
              <td>22/05/2026</td>
              <td> perfect solution for people suffering from severe headaches</td>

              <th>
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://www.netmeds.com/images/product-v1/600x600/930731/saridon_advance_tablets_for_5_in_1_pain_relief_10s_155118_0_3.jpg"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>Vicks Vaporub</td>
              <td>
                70
                <br />
              </td>
              <td>100</td>
              <td>22/06/2026</td>
              <td>Maximum relief from nasal congestion, cough, and cold symptoms</td>

              <td>
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src="https://www.netmeds.com/images/product-v1/600x600/14021/vicks_vaporub_50_ml_32625_0_1.jpg"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </td>
            </tr>
          </tbody>
          {/* foot */}
        
        </table>
      </div>
    </div>
  );
}

export default ViewStock