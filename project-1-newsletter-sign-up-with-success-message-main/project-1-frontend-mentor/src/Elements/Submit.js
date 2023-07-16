import { useState } from 'react';

export default function Submit({ emailAddress }) {
  const [emailStyle, setEmailStyle] = useState('correct-email');
  const [emailInput, setEmailInput] = useState('');
  const [error, setError] = useState(false);

  console.log(emailAddress, emailAddress(emailInput), emailInput);

  function handleSubmit(e) {
    const atIndex = emailInput.indexOf('@');
    const afterAt = emailInput.slice(atIndex + 1);
    const beforeAt = emailInput.slice(0, atIndex);
    const domainDot = afterAt.indexOf('.');
    const domain = afterAt.slice(0, domainDot);
    const afterDot = afterAt.slice(domainDot + 1);

    setError(false);
    setEmailStyle('correct-email');

    for (let i = 0; i < beforeAt.length; i++) {
      if (
        !(beforeAt.charCodeAt(i) > 47 && beforeAt.charCodeAt(i) < 58) &&
        !(beforeAt.charCodeAt(i) > 64 && beforeAt.charCodeAt(i) < 91) &&
        !(beforeAt.charCodeAt(i) > 96 && beforeAt.charCodeAt(i) < 123)
      ) {
        e.preventDefault();
        setError(true);
        setEmailStyle('incorrect-email');
        break;
      }
    }

    if (
      !emailInput.includes('@') ||
      domain.length < 1 ||
      afterDot.length < 1 ||
      afterAt.includes('@')
    ) {
      e.preventDefault();
      setError(true);
    }
  }

  function callBack() {
    return emailAddress(emailInput);
  }

  function submitAndRetain(e) {
    callBack();
    handleSubmit(e);
  }

  function handleChange(e) {
    e.preventDefault();
    let emailTextInput = e.target.value;
    setEmailInput(emailTextInput);
  }

  function EmailError() {
    if (error === true) {
      return <p className="mb-1 d-inline float-right">Valid email required</p>;
    }
  }

  return (
    <form id="email-form" onSubmit={submitAndRetain}>
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
