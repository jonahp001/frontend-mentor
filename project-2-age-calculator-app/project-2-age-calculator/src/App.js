import Ageform from './Elements/Ageform';
import AgeOutput from './Elements/AgeOutput';
import './App.css';

function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className="window container-md p-5 h-100">
        <Ageform />
        <AgeOutput />
      </div>
    </div>
  );
}

export default App;
