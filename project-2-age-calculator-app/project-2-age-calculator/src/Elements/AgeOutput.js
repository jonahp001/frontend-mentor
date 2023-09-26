export default function AgeOutput() {
  function Years() {
    return <h2 className="mb-0 d-inline output-date">--</h2>;
  }

  function Months() {
    return <h2 className="mb-0 d-inline output-date">--</h2>;
  }

  function Days() {
    return <h2 className="mb-0 d-inline output-date">--</h2>;
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
