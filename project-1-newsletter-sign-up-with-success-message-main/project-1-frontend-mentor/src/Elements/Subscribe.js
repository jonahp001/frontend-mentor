import Submit from './Submit';

export default function Subscribe() {
  return (
    <div className="order-2 order-sm-1 subscribe col-12 col-sm-6">
      <header>
        <h1 className="mb-3">Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
      </header>
      <div id="checkmarks" className="mb-4">
        <div className="mb-1">
          <svg
            className="me-3"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21">
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
            </g>
          </svg>
          <p className="d-inline">
            Product discovery and building what matters
          </p>
        </div>
        <div className="mb-1">
          <svg
            className="me-3"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21">
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
            </g>
          </svg>
          <p className="d-inline">Measuring to ensure updates are a success</p>
        </div>
        <div className="mb-1">
          <svg
            className="me-3"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21">
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8" />
            </g>
          </svg>
          <p className="d-inline">And much more!</p>
        </div>
      </div>
      <Submit />
    </div>
  );
}
