import React from 'react';
import { Routes, Route } from 'react-router-dom';
// 
import GeneralEntries from '../Features/GeneralJournal';
import FinancialStatementMainComponent from '../Features/FinancialStatement';
// import Ledger from '../Features/ledger';

function RouterSwitch() {
  return (
       <Routes>
         <Route path="/" element={<GeneralEntries />}/>
         <Route path="/financial-statement" element={<FinancialStatementMainComponent/>} />
         {/* <Route path="/ledger" element={<Ledger/>} /> */}
       </Routes>
  );
}

export default RouterSwitch;
