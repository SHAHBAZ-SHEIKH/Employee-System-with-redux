import EmployeeList from "./components/EmployeeList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddEmployee from "./components/AddEmployee"
import UpdateEmployee from "./components/UpdateEmployee"

function App() {


  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App
