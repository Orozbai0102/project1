import React, { useState } from "react";
import Button from "./Components/ui/Button";
import StudentList from "./Components/StudentList"
import Card from "./Components/ui/Card";

function App() {  
  const [showUsers, setShowUsers] = useState(false)
  

  const studentList = [
    {id: "1", name: "Orozbai"},
    {id: "2", name: "Oroz"},
    {id: "3", name: "Orozbek"}
  ]
  const toggleUsers = () => {
    setShowUsers(prevState => !prevState)
  }


  return (
    <Card>
   {showUsers && <StudentList student = {studentList}/>}
    <Button onClick={toggleUsers}>Show Users</Button>
    <Button>Add Todo</Button>
    <Button>Todo</Button>
    <Button>ddd</Button>
    </Card>
  );
}

export default App;
