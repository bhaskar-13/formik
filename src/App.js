
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { SignUp } from './components/signup';


function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUp/>
        </div>
      </div>
    </div>

  );
}

export default App;
