import React, { useState } from "react";
import "./Form.css";
// from hooks
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { useFirestore } from "../../../../hooks/useFirestore";

function FormModal() {
  const { dispatch, generalEntry } = useAuthContext();
  const { addDocument, response } = useFirestore("generalEntry");

  // Debit
  const [debitVal, setDebitVal] = useState([
    {
      debitInfo: "",
      debit: "",
      typeA: "",
    },
  ]);
  // Credit
  const [creditVal, setCreditVal] = useState([
    {
      creditInfo: "",
      credit: "",
      typeB: "",
    },
  ]);

  const [error, setError] = useState("");

  const debitInfoChangeHandler = (e, i) => {
    const { name, value } = e.target;
    const list = [...debitVal];
    list[i][name] = value;
    setDebitVal(list);
  };
  const creditInfoChangeHandler = (e, i) => {
    const { name, value } = e.target;
    const list = [...creditVal];
    list[i][name] = value;
    setCreditVal(list);
  };

  // const removeClickHandler = (val, index) => {
  //   if (val === "d") {
  //     const list = [...debitVal];
  //     list.splice(index, 1);
  //     setDebitVal(list);
  //   } else {
  //     const list = [...creditVal];
  //     list.splice(index, 1);
  //     setCreditVal(list);
  //   }
  // };

  // const addClickHandler = (val) => {
  //   if (val === "d") {
  //     setDebitVal([
  //       ...debitVal,
  //       {
  //         debitInfo: "",
  //         debit: "",
  //         typeA: "",
  //       },
  //     ]);
  //   } else {
  //     setCreditVal([
  //       ...creditVal,
  //       {
  //         creditInfo: "",
  //         credit: "",
  //         typeB: "",
  //       },
  //     ]);
  //   }
  // };

  // handle click event of the Add button
  const inputFunction = (inputArr, Info, Name, Type, fn) => {
    return inputArr.map((arr, i) => (
      <div className="form">
        <div>
          {/* debit and credit info */}
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              {" "}
              {Info}:{" "}
            </span>
            <input
              type="text"
              class="form-control"
              placeholder=" "
              id={Info}
              onChange={(e) => fn(e, i)}
              value={Info === "Debit Info" ? arr.debitInfo : arr.creditInfo}
              name={Info === "Debit Info" ? "debitInfo" : "creditInfo"}
            />
          </div>
        </div>

       {/* Debit and credit amount */}
        <div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              {" "}
              {Name} Amount :{" "}
            </span>
            <input
              type="number"
              class="form-control"
              placeholder=""
              id={Name}
              onChange={(e) => fn(e, i)}
              value={Info === "Debit Info" ? arr.debit : arr.credit}
              name={Name === "Debit" ? "debit" : "credit"}
            />
          </div>
        </div>

        <div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              {" "}
              {Type}{" "}
            </span>
            <select
              class="form-control"
              id="TypeA"
              onChange={(e) => fn(e, i)}
              value={Info === "Debit Info" ? arr.typeA : arr.typeB}
              name={Type === "Type A" ? "typeA" : "typeB"}
            >
              <option value="">Select Type</option>
              <option value="Asset">Asset</option>
              <option value="Liability">Liability</option>
              <option value="Owner Equity">Owner Equity</option>
              <option value="Revenue">Revenue</option>
              <option value="Expense">Expense</option>
              <option value="Owner withdraw">Owner withdraw</option>
            </select>
          </div>
        </div>
      </div>
    ));
  };
  // 
  const debitInput = inputFunction(
    debitVal,
    "Debit Info",
    "Debit",
    "Type A",
    debitInfoChangeHandler
  );
  const creditInput = inputFunction(
    creditVal,
    "Credit Info",
    "Credit",
    "Type B",
    creditInfoChangeHandler
  );

  // @-onClick function
  const postGeneralEntryHandler = async () => {
    const debitValue = debitVal.reduce((acc, { debit }) => acc + +debit, 0);
    const creditValue = creditVal.reduce((acc, { credit }) => acc + +credit, 0);
    // const id = Math.floor(Math.random() * 100);

    if (debitValue === creditValue) {
      const entriesToPost = [
        ...debitVal.map((debitEntry) => debitEntry),
        ...creditVal.map((creditEntry) => creditEntry),
      ];
      console.log(entriesToPost);
      dispatch({ type: "General_Entry", payload: entriesToPost });
      await addDocument(entriesToPost);
    } else {
      setError("Debit and Credit value should be equal");
    }
  };

  // Main func
  return (
    <div className="form-container">
      <form className="overallform">
        {debitInput}
        {creditInput}
      </form>
      <br />

      {/* @-Submit btn */}
      <div className="submit-section">
        <div>
          <p className="alert alert-warning" hidden={!error}>
            {error}
          </p>
          <button
            type="submit"
            className={`btn btn-primary`}
            onClick={postGeneralEntryHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
