
import './App.css';
import Header from './components/Header';
import Allpcustomers from './components/Allpcustomers';
import AddprivilegedCustomer from './components/AddPrivilegedCustomer';
import DeletePcustomer from './components/delete';


import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">

        <Header/>
        <Routes>
        <Route path="/add" exact Component={AddprivilegedCustomer} />
        <Route path="/" exact Component={Allpcustomers}/>
        <Route path="/delete" exact Component={DeletePcustomer}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
