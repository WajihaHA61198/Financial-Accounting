/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./financialstatement.css";
import { useCollection } from "../../hooks/useCollection";
// import { useAuthContext } from "../../hooks/useAuthContext";

function FinancialStatementMainComponent() {
  const { documents, error } = useCollection("generalEntry");
  // const { dispatch, rev, exp, netInc } = useAuthContext();

  const allTypesData = () => {
    let revTotal = 0;
    let expTotal = 0;
    let netTotal = 0;
    let ownerWithDraw = 0;
    let assetsTotal = 0;
    let liabTotal = 0;
    let ownerEquity = 0;
    let endingOwnerEquity = 0;

    documents &&
      documents.map((arr, index) => {
        const { typeA, debit } = arr[0]; //type and amount
        const { typeB, credit } = arr[1];
        // console.log(typeB,credit);

        console.log(typeB);

        if (typeB == "Revenue") {
          revTotal += Number(credit);
        }
        if (typeB == "Owner Equity") {
          ownerEquity += Number(credit);
        }
        if (typeA == "Expense") {
          expTotal += Number(debit);
        }
        if (typeA == "Owner withdraw") {
          ownerWithDraw += Number(debit);
        }
        if (typeA == "Asset") {
          assetsTotal += Number(debit);
        }
        if (typeB == "Asset") {
          assetsTotal -= Number(credit);
        }
        if (typeA == "Liability") {
          console.log("yes");
          liabTotal += Number(debit);
        }
        if (typeB == "Liability") {
          console.log("yes");
          liabTotal -= Number(credit);
        }
      });
    netTotal = revTotal - expTotal;
    endingOwnerEquity = netTotal - ownerWithDraw;

    console.log(assetsTotal, liabTotal);
    return {
      revTotal,
      expTotal,
      netTotal,
      ownerWithDraw,
      assetsTotal,
      liabTotal,
      ownerEquity,
      endingOwnerEquity,
    };
  };
  // --------------------------------------
  const generateIncomeStatement = () => {
    const { revTotal, expTotal, netTotal } = allTypesData();

    return (
      <div className="income-statement">
        <h2>• Income statement</h2>
        <div className="rev-exp">
          <div>Revenue: {revTotal}</div>
          <div>Expense: {expTotal}</div>
        </div>
        <div className="net-inc">Net Income: {netTotal}</div>
      </div>
    );
  };
  // --------------------------------------
  const generateOwnetEquityStatement = () => {
    const { netTotal, ownerWithDraw, ownerEquity } = allTypesData();
    const balance = netTotal - ownerWithDraw;

    return (
      <div className="owner-equity-statement">
        <h2>• Owner Capital statement</h2>
        <div className="OE-entries">
          <div>Beginnig Balance: {}</div>
          <div>OW: {ownerWithDraw}</div>
          <div>Add Net Income: {netTotal}</div>
          <div className="net-inc">Ending Balance of OC: {balance}</div>
        </div>
      </div>
    );
  };

  // --------------------------------------
  const balanceSheetStatement = () => {
    const { assetsTotal, liabTotal, ownerEquity, endingOwnerEquity } = allTypesData();
    let flag = 0;
    if (assetsTotal == liabTotal + endingOwnerEquity + ownerEquity) {
      //if balance is equal
      flag = 1;
    }

    return (
      <>
        <h2>• Balance-Sheet statement</h2>
        <div className="balance-sheet">
          <div className="asset-col">
            <div className="head">Assets</div>
            <div className="net-inc">Total: {assetsTotal}</div>
          </div>
          <br />
          <div className="liab-oe-col">
            <div className="head">Liability and OE</div>
            <div>Liability: {liabTotal}</div>
            <div>OE: {ownerEquity}</div>
            <div>Ending Balance of OC: {endingOwnerEquity}</div>
            <div className="net-inc">Total: {liabTotal + endingOwnerEquity + ownerEquity}</div>
          </div>
        </div>
        {flag == 1 && <h4 className="result">Balanced</h4>}
        {flag == 0 && <h4 className="result">UnBalanced</h4>}
      </>
    );
  };
  // --------------------------------------
  return (
    <div className="financial-statements">
      {generateIncomeStatement()}
      {generateOwnetEquityStatement()}
      {balanceSheetStatement()}
    </div>
  );
}

export default FinancialStatementMainComponent;
