import React from 'react';
// Components
import FormModal from './Components/FormModal/index';
import GeneralEntries from './Components/GeneralEntries';

const GeneralEntriesContainer = props => {
  return (
    <div>
       <FormModal />
       <GeneralEntries/>
    </div>
  );
};

export default GeneralEntriesContainer;
