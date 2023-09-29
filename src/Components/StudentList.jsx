const StudentList = (props) => {
    // console.log(props.students);
    const student1 = props.students[0].name
    const student2 = props.students[1].name
    const student3 = props.students[2].name
    const student4 = props.students[3].name
    return (
        <ul>
            <li>{student1}</li>
            <li>{student2}</li>
            <li>{student3}</li>
            <li>{student4}</li>
        </ul>
    )
}
export default StudentList