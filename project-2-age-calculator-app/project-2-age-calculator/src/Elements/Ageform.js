import { useState } from 'react';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export default function Ageform({
  setDayInput,
  setMonthInput,
  setYearInput,
  setIsValidDate,
}) {
  const [dateStyle, setDateStyle] = useState('correct-date');
  const [yearStyle, setYearStyle] = useState('correct-date');
  const [monthStyle, setMonthStyle] = useState('correct-date');
  const [dayStyle, setDayStyle] = useState('correct-date');
  const [invalidDate, setInvalidDate] = useState(false);
  const [invalidYear, setInvalidYear] = useState(false);
  const [invalidMonth, setInvalidMonth] = useState(false);
  const [invalidDay, setInvalidDay] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const day = e.target[0].value;
    const month = e.target[1].value - 1;
    const year = e.target[2].value;

    setInvalidDate(false);
    setInvalidYear(false);
    setInvalidMonth(false);
    setInvalidDay(false);
    setIsValidDate(true);
    setDateStyle('correct-date');
    setYearStyle('correct-date');
    setMonthStyle('correct-date');
    setDayStyle('correct-date');

    if (year > currentYear) {
      setYearStyle('incorrect-date');
      setInvalidYear(true);
      setIsValidDate(false);
    }

    if (month > 11 || month < 0 || month.length > 2) {
      setMonthStyle('incorrect-date');
      setInvalidMonth(true);
      setIsValidDate(false);
    }

    if (
      day > 31 ||
      day < 1 ||
      (month === 1 && day > 28 && day < 30 && year % 4 > 1) ||
      ((month === 3 || month === 5 || month === 8 || month === 10) &&
        day > 30) ||
      (year % 4 > 0 && month === 1 && day > 29)
    ) {
      setDayStyle('incorrect-date');
      setInvalidDay(true);
      setIsValidDate(false);
    }

    setDayInput(e.target[0].value);
    setMonthInput(e.target[1].value);
    setYearInput(e.target[2].value);
  }

  if (
    (invalidDay === true && invalidMonth === false && invalidYear === false) ||
    (invalidDay === false && invalidMonth === false && invalidYear === true) ||
    (invalidDay === false && invalidMonth === true && invalidYear === false)
  ) {
    setDateStyle('incorrect-date');
    setInvalidDate(true);
    setDayStyle('correct-date');
    setInvalidDay(false);
    setMonthStyle('correct-date');
    setInvalidMonth(false);
    setYearStyle('correct-date');
    setInvalidYear(false);
    setIsValidDate(false);
  }

  function DateInputError() {
    if (invalidDate === true) {
      return (
        <p
          className={`font-italic text-left mb-0 mt-2 incorrect-input ${dateStyle}`}>
          Must be a valid date
        </p>
      );
    }
  }

  function InvalidYearError() {
    if (invalidYear === true) {
      return (
        <p className={`font-italic text-left mb-0 mt-2 ${yearStyle}`}>
          Must be in the past
        </p>
      );
    }
  }

  function InvalidMonthError() {
    if (invalidMonth === true) {
      return (
        <p className={`font-italic text-left mb-0 mt-2 ${monthStyle}`}>
          Must be a valid month
        </p>
      );
    }
  }

  function InvalidDayError() {
    if (invalidDay === true) {
      return (
        <p className={`font-italic text-left mb-0 mt-2 ${dayStyle}`}>
          Must be a valid day
        </p>
      );
    }
  }

  return (
    <div className="px-0">
      <form onSubmit={handleSubmit}>
        <div
          className={`d-flex justify-content-between date-input col-sm-9 col-12 px-0 text-left ${dateStyle}`}>
          <div className={`date-space ${dayStyle}`}>
            <label htmlFor="day-input">DAY</label>
            <input
              className="w-100"
              id="day-input"
              type="number"
              placeholder="DD"
              min="1"
              required></input>
            <InvalidDayError />
          </div>
          <div className={`date-space mx-3 ${monthStyle}`}>
            <label htmlFor="month-input">MONTH</label>
            <input
              className="w-100"
              id="month-input"
              type="number"
              placeholder="MM"
              min="1"
              required></input>
            <InvalidMonthError />
          </div>
          <div className={`date-space ${yearStyle}`}>
            <label htmlFor="year-input">YEAR</label>
            <input
              className="w-100"
              id="year-input"
              type="number"
              placeholder="YYYY"
              min="1"
              required></input>
            <InvalidYearError />
          </div>
        </div>
        <DateInputError />
        <div className="d-flex align-items-center my-4 my-sm-0">
          <hr className="submit-line d-none d-sm-block"></hr>
          <hr className="submit-line d-sm-none"></hr>
          <button id="submit-button" type="submit">
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
          <hr className="submit-line d-sm-none"></hr>
        </div>
      </form>
    </div>
  );
}
