import { useEffect, useState } from 'react';

export default function Success({ email, success, setDivClassHidden }) {
  const [classHidden, setClassHidden] = useState('hidden');

  useEffect(() => {
    if (success === true) {
      setClassHidden('');
    }
  }, [success]);

  function handleClick() {
    setClassHidden('hidden');
    setDivClassHidden('');
    document.querySelector('#email-form').reset();
  }

  return (
    <div
      id="success-div"
      className={`success p-4 p-sm-5 d-flex flex-column shadow justify-content-center ${classHidden}`}>
      <div className="text-start">
        <svg
          className="mb-4"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 21 21">
          <g fill="none">
            <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
            <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
          </g>
        </svg>
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription
        </p>
      </div>
      <div>
        <button onClick={handleClick} type="button">
          Dismiss Message
        </button>
      </div>
    </div>
  );
}
