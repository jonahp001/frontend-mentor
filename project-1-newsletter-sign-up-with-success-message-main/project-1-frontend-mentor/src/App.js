import './App.css';
import desktopImage from './illustration-sign-up-desktop.svg';
import Subscribe from './Elements/Subscribe';
import Success from './Elements/Success';
import { useState, useEffect } from 'react';

function App() {
  const [currentEmailAddress, setCurrentEmailAddress] = useState();
  const [currentSuccessState, setCurrentSuccessState] = useState();
  const [divClassHidden, setDivClassHidden] = useState('');

  console.log(currentSuccessState, divClassHidden);

  useEffect(() => {
    if (currentSuccessState === true) {
      setDivClassHidden('hidden');
    }
  }, [currentSuccessState]);

  return (
    <div className="App-bg d-flex justify-content-center align-items-center">
      <div
        id="mainDiv"
        className={`h-100 subscribe-window container-md d-flex flex-row px-0 shadow ${divClassHidden}`}>
        <div className="row">
          <Subscribe
            setCurrentEmailAddress={setCurrentEmailAddress}
            setCurrentSuccessState={setCurrentSuccessState}
          />
          {/* note to self, dont put a classname on react component, but put it on the first DIV inside the component if you want to change aspects of it */}
          <img
            className="order-1 order-sm-2 my-auto mx-auto p-4 col-12 col-sm-6"
            src={desktopImage}
            alt="Newsletter Graphic"
          />
        </div>
      </div>
      <Success
        email={currentEmailAddress}
        success={currentSuccessState}
        setDivClassHidden={setDivClassHidden}
      />
    </div>
  );
}

export default App;
