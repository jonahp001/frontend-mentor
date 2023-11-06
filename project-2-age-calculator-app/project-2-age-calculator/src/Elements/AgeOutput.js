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
  years = `${years} `;
  let months = Math.floor((dayDifference - years * 365) / 30);
  months = `${months} `;
  let days = Math.floor(dayDifference - years * 365 - months * 30);
  days = `${days} `;

  let outputSpace = 'output-date-normal';

  if (isValidDate === false) {
    years = '--';
    months = '--';
    days = '--';
    outputSpace = 'output-date';
  }

  function Years() {
    return <h2 className={`mb-0 d-inline ${outputSpace}`}>{years}</h2>;
  }

  function Months() {
    return <h2 className={`mb-0 d-inline ${outputSpace}`}>{months}</h2>;
  }

  function Days() {
    return <h2 className={`mb-0 d-inline ${outputSpace}`}>{days}</h2>;
  }

  return (
    <div className="age-output text-left">
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
