import React, { useState } from "react";
import Button from "./Components/ui/Button";
import StudentList from "./Components/StudentList";

function App() {  
  // const [showUsers, setShowUsers] = useState(false)
  const [showUsers, setShowUsers] = useState(false)

  const studentList = [
    {id: '1', name: 'Orozbai'},
    {id: '2', name: 'Orozaaly'},
    {id: '3', name: 'Orozbek'},
    {id: '4', name: 'Oroz'},
  ]

  function toggleUsers() {
    // alert('Assalam aleikum')
    setShowUsers(prevState => !prevState)
  }

  return (
    <div>
      {showUsers && <StudentList students = {studentList}/>}
      {/* <StudentList students = {studentList}/> */}
      <Button onClick = {toggleUsers}>Show Users</Button>
      <Button>Add Todo</Button>
      <Button>Check Todo</Button>
      <Button>Delete</Button>
    </div>
  );
}

export default App;
