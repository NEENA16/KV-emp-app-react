import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import EmployeeList from './pages/employee-list/EmployeeList';
import CreateEmployee from './pages/create-employee/CreateEmployee';
import Login from './pages/login/Login';
import List from './pages/employee-list/EmployeeList';
import Counter from './pages/Counter';
import { Provider } from 'react-redux';
import {store} from './store/store'
import EmployeeDetails from './pages/employee-details/EmployeeDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element = {<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/create" element={<CreateEmployee />} />
          {/* <Route path="/details" element={<EmployeeDetails />} /> */}
          <Route path="/counter" element={<Counter/>} />
          <Route path="/detail/:id" element={<EmployeeDetails/>}/>
          <Route path="/edit/:id" element={<CreateEmployee/>} ></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
