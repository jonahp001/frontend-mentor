import { useState } from 'react';

export default function Submit() {
  const [emailText, setEmailText] = useState('');
  const [emailInput, setEmailInput] = useState('');
  // const $form = document.querySelector('#email-form');
  // const $email = document.querySelector('#email')
  // console.log($email)

  function handleSubmit(e) {
    e.preventDefault();
    if (!emailInput.includes('@')) {
      console.log('YES');
      setEmailText('incorrect-email');
    } else {
      setEmailText('correct-email');
    }
  }

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    let emailTextInput = e.target.value;
    setEmailInput(emailTextInput);
  }

  console.log(emailInput);

  return (
    <form id="email-form" onSubmit={handleSubmit} onChange={handleChange}>
      <div className="pb-4">
        <label className="pb-1" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          name="email"
          className={`d-block ${emailText}`}
          type="text"
          placeholder="email@company.com"></input>
      </div>
      <input
        id="submit"
        type="submit"
        value="Subscribe to monthly newsletter"></input>
    </form>
  );
}
