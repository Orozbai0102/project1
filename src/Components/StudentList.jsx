import React from 'react'

const StudentList = ({student}) => {
    const student1 = student[0].name
    const student2 = student[1].name
    const student3 = student[2].name

  return (
    <ul>
        <li>{student1}</li>
        <li>{student2}</li>
        <li>{student3}</li>
    </ul>
  )
}

export default StudentList