import './App.css';
import desktopImage from './illustration-sign-up-desktop.svg';
import Subscribe from './Elements/Subscribe';
import Success from './Elements/Success';

function App() {
  return (
    <div className="App-bg d-flex justify-content-center align-items-center">
      <div className="h-100 subscribe-window container-md d-flex flex-row px-0 shadow">
        <div className="row">
          <Subscribe />
          {/* note to self, dont put a classname on react component, but put it on the first DIV inside the component if you want to change aspects of it */}
          <img
            className="order-1 order-sm-2 my-auto mx-auto p-4 col-12 col-sm-6"
            src={desktopImage}
            alt="Newsletter Graphic"
          />
        </div>
      </div>
      <Success />
    </div>
  );
}

export default App;
