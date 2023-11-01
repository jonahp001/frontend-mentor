export default function AgeOutput({
  isValidDate,
  dayInput,
  monthInput,
  yearInput,
}) {
  const dateEntry = new Date(yearInput, monthInput - 1, dayInput);
  const todayDate = new Date();

  const msDifference = todayDate.getTime() - dateEntry.getTime();
  const dayDifference = Math.trunc(msDifference / (1000 * 3600 * 24));
  const yearDifference = dayDifference / 365;

  let years = Math.floor(yearDifference);
  let months = Math.floor((dayDifference - years * 365) / 30);
  let days = Math.floor(dayDifference - years * 365 - months * 30);
  console.log(years, months, days);

  if (isValidDate === false) {
    console.log('nice');
    years = '--';
    months = '--';
    days = '--';
  }

  function Years() {
    return <h2 className="mb-0 d-inline output-date">{years}</h2>;
  }

  function Months() {
    return <h2 className="mb-0 d-inline output-date">{months}</h2>;
  }

  function Days() {
    return <h2 className="mb-0 d-inline output-date">{days}</h2>;
  }

  return (
    <div className="age-output text-left overflow-hidden">
      <div>
        <Years />
        <h2 className="mb-0 d-inline">years</h2>
      </div>
      <div>
        <Months />
        <h2 className="mb-0 d-inline">months</h2>
      </div>
      <div>
        <Days />
        <h2 className="mb-0 d-inline">days</h2>
      </div>
    </div>
  );
}
