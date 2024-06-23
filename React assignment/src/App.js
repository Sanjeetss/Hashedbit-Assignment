import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CalculatorComponent from './pages/calculator';
import ToDoListComponent from './pages/ToDoList';
import IPL_PointTable from './pages/IPLtable_API_call';

function App() {
  return (
    <Router>
       <h1 className="heading">React Assignment</h1>
      <div className="body">
        <nav className='menubar'>     
          <Link to="/">Calculator</Link>
          <Link to="/todo">ToDo List</Link>
          <Link to="/ipl">IPL Points Table</Link>
          </nav>
        <Routes>
          <Route path="/" element={<CalculatorComponent />} />
          <Route path="/todo" element={<ToDoListComponent />} />
          <Route path="/ipl" element={<IPL_PointTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
