import { useState } from 'react';

export default function Submit() {
  const [emailStyle, setEmailStyle] = useState('correct-email');
  const [emailInput, setEmailInput] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const atIndex = emailInput.indexOf('@');
    const afterAt = emailInput.slice(atIndex + 1);
    const beforeAt = emailInput.slice(0, atIndex);
    const domainDot = afterAt.indexOf('.');
    const domain = afterAt.slice(0, domainDot);
    const afterDot = afterAt.slice(domainDot + 1);

    console.log(emailInput, beforeAt);

    setError(false);
    setEmailStyle('correct-email');

    for (let i = 0; i < beforeAt.length; i++) {
      if (
        !(beforeAt.charCodeAt(i) > 47 && beforeAt.charCodeAt(i) < 58) &&
        !(beforeAt.charCodeAt(i) > 64 && beforeAt.charCodeAt(i) < 91) &&
        !(beforeAt.charCodeAt(i) > 96 && beforeAt.charCodeAt(i) < 123)
      ) {
        setError(true);
        setEmailStyle('incorrect-email');
        console.log('bad bad', error);
        break;
      }
    }

    if (
      !emailInput.includes('@') ||
      domain.length < 1 ||
      afterDot.length < 1 ||
      afterAt.includes('@')
    ) {
      setError(true);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    let emailTextInput = e.target.value;
    setEmailInput(emailTextInput);
  }

  function EmailError() {
    if (error === true) {
      return <p className="mb-1 d-inline float-right">Valid email required</p>;
    }
  }

  return (
    <form id="email-form" onSubmit={handleSubmit}>
      <div className="pb-4">
        <div className="email-label-line w-100 d-flex justify-content-between">
          <label className="pb-1" htmlFor="email">
            Email address
          </label>
          <EmailError />
        </div>
        <input
          id="email"
          name="email"
          className={`d-block ${emailStyle}`}
          type="text"
          placeholder="email@company.com"
          onChange={handleChange}></input>
      </div>
      <input
        id="submit"
        type="submit"
        value="Subscribe to monthly newsletter"></input>
    </form>
  );
}
