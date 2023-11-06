import Ageform from './Elements/Ageform';
import AgeOutput from './Elements/AgeOutput';
import './App.css';
import { useState } from 'react';

function App() {
  const [dayInput, setDayInput] = useState('');
  const [monthInput, setMonthInput] = useState('');
  const [yearInput, setYearInput] = useState('');
  const [isValidDate, setIsValidDate] = useState(false);
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className="window container-md h-100 mx-3">
        <div className="row">
          <div className="col">
            <Ageform
              setIsValidDate={setIsValidDate}
              setDayInput={setDayInput}
              setMonthInput={setMonthInput}
              setYearInput={setYearInput}
            />
            <AgeOutput
              isValidDate={isValidDate}
              dayInput={dayInput}
              monthInput={monthInput}
              yearInput={yearInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
