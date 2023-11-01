import Ageform from './Elements/Ageform';
import AgeOutput from './Elements/AgeOutput';
import './App.css';
import { useState } from 'react';

function App() {
  const [dayInput, setDayInput] = useState('');
  const [monthInput, setMonthInput] = useState('');
  const [yearInput, setYearInput] = useState('');
  const [isValidDate, setIsValidDate] = useState(false);
  console.log(dayInput, monthInput, yearInput);
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className="window container-md p-5 h-100">
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
  );
}

export default App;
