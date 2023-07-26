export default function Success(props) {
  return (
    <div
      id="successDiv"
      className="success p-5 d-flex flex-column justify-content-center hidden">
      <div className="text-start">
        <svg
          className="mb-4"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 21 21">
          <g fill="none">
            <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
            <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
          </g>
        </svg>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{props.email}</strong>.
          Please open it and click the button inside to confirm your
          subscription
        </p>
      </div>
      <div>
        <button type="button">Dismiss Message</button>
      </div>
    </div>
  );
}
