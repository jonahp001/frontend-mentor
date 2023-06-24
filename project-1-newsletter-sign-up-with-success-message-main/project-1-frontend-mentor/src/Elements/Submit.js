import { useState } from 'react';

export default function Submit() {
  const [emailText, setEmailText] = useState('');
  const form = document.querySelector('#email-form');

  function handleSubmit(e) {
    e.preventDefault();
    var formData = new FormData(form);
    var inputValue = formData.get('email');
    console.log(form, inputValue);
    if (!inputValue.includes('@')) {
      console.log('YES');
      setEmailText('incorrect-email');
    } else {
      setEmailText('correct-email');
    }
  }

  return (
    <form id="email-form" onSubmit={handleSubmit}>
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
