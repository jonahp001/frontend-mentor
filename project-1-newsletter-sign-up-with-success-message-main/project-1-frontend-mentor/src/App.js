import './App.css';
import desktopImage from './illustration-sign-up-desktop.svg';
import Subscribe from './Elements/Subscribe';

function App() {
  return (
    <div className="App-bg d-flex justify-content-center align-items-center">
      <div className="subscribe-window container-md d-flex flex-row px-0">
        <Subscribe />
        <img
          className="h-100 p-4 col"
          src={desktopImage}
          alt="Newsletter Graphic"
        />
      </div>
    </div>
  );
}

export default App;
