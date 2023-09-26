import { useState } from 'react';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default function Ageform() {
  const [dayInput, setDayInput] = useState('');
  const [monthInput, setMonthInput] = useState('');
  const [yearInput, setYearInput] = useState('');
  const [dateStyle, setDateStyle] = useState('correct-date');
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const day = e.target[0].value;
    const month = e.target[1].value - 1;
    const year = e.target[2].value;

    setError(false);
    setDateStyle('correct-date');

    if (
      day > 31 ||
      day < 1 ||
      day.length > 2 ||
      month > 11 ||
      month < 0 ||
      month.length > 2 ||
      year.length > 4 ||
      year < 0 ||
      (month === 1 && day > 28) ||
      ((month === 0 ||
        month === 2 ||
        month === 4 ||
        month === 6 ||
        month === 7 ||
        month === 9 ||
        month === 11) &&
        day > 31) ||
      ((month === 3 || month === 5 || month === 8 || month === 10) &&
        day > 30) ||
      (year % 4 > 0 && month === 1 && day > 29)
    ) {
      setError(true);
      setDateStyle('incorrect-date');
    }

    setDayInput(e.target[0].value);
    setMonthInput(e.target[1].value);
    setYearInput(e.target[2].value);
  }

  console.log(dayInput, monthInput, yearInput);
  console.log(new Date(yearInput, monthInput - 1, dayInput));

  function DateInputError() {
    if (error === true) {
      return (
        <p className="font-italic text-left mb-0 mt-2">Must be a valid date</p>
      );
    }
  }

  return (
    <div className="px-0">
      <form onSubmit={handleSubmit}>
        <div
          className={`d-flex justify-content-between date-input col-9 px-0 text-left ${dateStyle}`}>
          <div className="date-space">
            <label htmlFor="day-input">DAY</label>
            <input
              className="w-100"
              id="day-input"
              type="number"
              placeholder="DD"
              required></input>
          </div>
          <div className="date-space">
            <label htmlFor="month-input">MONTH</label>
            <input
              className="w-100"
              id="month-input"
              type="number"
              placeholder="MM"
              required></input>
          </div>
          <div className="date-space">
            <label htmlFor="year-input">YEAR</label>
            <input
              className="w-100"
              id="year-input"
              type="number"
              placeholder="YYYY"
              required></input>
          </div>
        </div>
        <DateInputError />
        <div className="d-flex align-items-center">
          <hr className="submit-line"></hr>
          <button id="submit-button" className="float-right" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              viewBox="0 0 46 44">
              <g fill="none" stroke="#FFF" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
              <title id="button-label">Submit Button</title>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
