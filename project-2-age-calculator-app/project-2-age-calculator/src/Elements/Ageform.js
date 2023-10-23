import { useState } from 'react';
// import { useEffect } from 'react';

// const months = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ];

const currentDate = new Date();

const currentYear = currentDate.getFullYear();

export default function Ageform() {
  const [dayInput, setDayInput] = useState('');
  const [monthInput, setMonthInput] = useState('');
  const [yearInput, setYearInput] = useState('');
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
    setDateStyle('correct-date');
    setYearStyle('correct-date');
    setMonthStyle('correct-date');
    setDayStyle('correct-date');

    if (year > currentYear) {
      setYearStyle('incorrect-date');
      setInvalidYear(true);
    }

    if (month > 11 || month < 0 || month.length > 2) {
      setMonthStyle('incorrect-date');
      setInvalidMonth(true);
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
    }

    if (
      (invalidDay === true &&
        invalidMonth === false &&
        invalidYear === false) ||
      (invalidDay === false &&
        invalidMonth === false &&
        invalidYear === true) ||
      (invalidDay === false && invalidMonth === true && invalidYear === false)
    ) {
      console.log(invalidDate);
      console.log(invalidDay);
      console.log(invalidMonth);
      console.log(invalidYear);
      setDateStyle('incorrect-date');
      setInvalidDate(true);
      setDayStyle('correct-date');
      setInvalidDay(false);
      setMonthStyle('correct-date');
      setInvalidMonth(false);
      setYearStyle('correct-date');
      setInvalidYear(false);
    }

    // if (
    //   (((!day > 31 ||
    //   !day < 1) &&
    //   (!month > 11 ||
    //   !month < 0 ||
    //   !((month === 1 && day > 28 && day < 30) && year % 4 > 1) ||
    //   !((month === 0 ||
    //     month === 2 ||
    //     month === 4 ||
    //     month === 6 ||
    //     month === 7 ||
    //     month === 9 ||
    //     month === 11) &&
    //     day > 31) ||
    //   !((month === 3 || month === 5 || month === 8 || month === 10) &&
    //     day > 30))) &&
    //     (year.length > 4 ||
    //     year < 0 ||
    //     (year % 4 > 0 && month === 1 && day > 29) ||
    //     year > currentYear)
    //     )) {
    //   console.log('hi there!')
    //   setDateStyle('incorrect-date');
    //   setInvalidYear(true)
    // }

    setDayInput(e.target[0].value);
    setMonthInput(e.target[1].value);
    setYearInput(e.target[2].value);
  }

  // useEffect(() => {
  //   setInvalidDate(false);
  //   setInvalidDay(false)
  //   setInvalidMonth(false)
  //   setInvalidYear(false)
  // }, [invalidDate, invalidDay, invalidMonth, invalidYear])

  console.log(dayInput, monthInput, yearInput);
  console.log(new Date(yearInput, monthInput - 1, dayInput));

  function DateInputError() {
    if (invalidDate === true) {
      return (
        <p className={`font-italic text-left mb-0 mt-2 ${dateStyle}`}>
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

  console.log(dateStyle);
  console.log(dayStyle);
  console.log(monthStyle);
  console.log(yearStyle);

  return (
    <div className="px-0">
      <form onSubmit={handleSubmit}>
        <div
          className={`d-flex justify-content-between date-input col-9 px-0 text-left ${dateStyle}`}>
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
          <div className={`date-space ${monthStyle}`}>
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
