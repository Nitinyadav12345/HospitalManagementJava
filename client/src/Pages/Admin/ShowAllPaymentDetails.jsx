import React, { useEffect, useState } from "react";
import MedicalBillTable from "../../Components/MedicalBillTable";
import { toast } from "react-toastify";
import { getAllPayments } from "../../service/admin";

const ShowAllPaymentDetails = () => {
  const [medicalBills, setMedicalBills] = useState();

  useEffect(() => {
    const Payments = async () => {
      try {
        const res = await getAllPayments();
        console.log(res);
        setMedicalBills(res.data.data);
      } catch (error) {
        toast.error("error occured during loading the Payments");
      }
    };
    Payments();
  }, []);

  return (
    <div>
      <div className="text-center text-amber-950 text-2xl mb-5">
        BILLING DETAILS
      </div>
      <MedicalBillTable data={medicalBills} itemsPerPage={5} />
    </div>
  );
};

export default ShowAllPaymentDetails;
