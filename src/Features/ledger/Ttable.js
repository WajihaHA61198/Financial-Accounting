// import React from "react";
// import { request } from "../shared/http.service";
// import { useCollection } from "../../hooks/useCollection";

// const Tables = () => {
//   let cash = "";
//   let land = "";
//   let service_rev = "";
//   let NotePay = "";
//   let AccPay = "";
//   let OW = "";
//   let OC = "";
//   let Expense = "";
//   let supplies = "";

//   function Ttable() {
//     return new Promise((resolve, reject) => {
//       const { documents, error } = useCollection("ledgerTable");

//       documents && documents.map((arr, index) => {
//           arr.data = push.Tables("tables")

//           if (data.Ttable === 0){
//               console.assert("table is empty")
//           }else if(data.Table !== 0 && data.push(arr))
//       });

//       request("/t/accounts", null, "get")
//         .then((res) => {
//           return resolve(res.data);
//         })
//         .catch((err) => {
//           return reject(err.response);
//         });
//     });
//   }
// };

// export default Ttable;
