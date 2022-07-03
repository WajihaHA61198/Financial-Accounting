import React from "react";
// import LoadingSpinner from "../../../../components/UI/LoadingSpinner";
import { useCollection } from "../../../../hooks/useCollection";
import "./generalentries.css";
import moment from "moment";

function GeneralEntries() {
  const { documents, error } = useCollection("generalEntry");

  const renderGeneralEnrties = () => {
    //console.log(documents);
    return (
      documents &&
      documents.map((arr, index) => {
        const { debitInfo, debit } = arr[0];
        const { creditInfo, credit } = arr[1];
        const date = moment(arr.createdAt.toDate().toString()).format(
          "MMM Do YY"
        );
        // const id = arr.id;
        console.log(date, debitInfo, creditInfo, debit, credit);

        return (
          <div className="entry">
            {/* <h5>{id}</h5> */}
            <h5>{date}</h5>
            <h5>{debitInfo}</h5>
            <h5>{creditInfo}</h5>
            <h5>{debit}</h5>
            <h5>{credit}</h5>
          </div>
        );
      })
    );
  };

  return (
    <div className="general-entry-container">
      <hr />
      <h3>General Journal</h3>
      <hr />
      <div className="entry">
        {/* <h5>ID</h5> */}
        <h5 className="ht">Date</h5>
        <h5 className="ht">Dr Account</h5>
        <h5 className="ht">Cr Account</h5>
        <h5 className="ht">Debit</h5>
        <h5 className="ht">Credit</h5>
      </div>
      <hr />
      {renderGeneralEnrties()}
    </div>
  );
}

export default GeneralEntries;
