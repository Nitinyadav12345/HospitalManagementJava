import React from "react";

const Appointment = () => {
  const AppointmentData = [
    {
      id:1,
      doctor: "nitin yadav",
      status: "completed",
      problem:"Dengue and typhoid",
      Prescription: "IV and get addmited",
      Date: "20-10-2023",
    },
    {
      id:2,
      doctor: "saylee",
      status: "pending",
      problem:"Dengue and typhoid",
      Prescription: " ",
      Date: "10-10-2023",
    },
  ];

  return (
    <div>
      <center>
        {" "}
        <span className="text-2xl font-bold">Appointment History</span>
      </center>
      <center>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className=" text-lg font-semibold">Doctor's Name </th>
                <th className=" text-lg font-semibold">Problem</th>
                <th className=" text-lg font-semibold">Prescription</th>
                <th className=" text-lg font-semibold">status</th>
                <th className=" text-lg font-semibold">Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
               AppointmentData.map((obj)=>{
                return <tr>
                <th>{obj.id}</th>
                <td>{obj.doctor}</td>
                <td>{obj.problem}</td>
                <td>{obj.Prescription}</td>
                {
                  obj.status == "completed" ? <td><span className="btn btn-success">{obj.status}</span></td> : <td><span className="btn btn-warning">{obj.status}</span></td>
                }
                <td>{obj.Date}</td>
                <td><span className="btn btn-error">Remove</span></td>
                <td><button className="btn btn-info">info</button></td>
              </tr>
               })
              }
              
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};

export default Appointment;
