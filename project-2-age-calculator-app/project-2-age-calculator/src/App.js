import Ageform from './Elements/Ageform';
import AgeOutput from './Elements/AgeOutput';
import './App.css';

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="window container-md p-5 h-100">
        <Ageform />
        <AgeOutput />
      </div>
    </div>
  );
}

export default App;
