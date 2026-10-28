function StudentCard(props) {
    return (
        <>
        <h2> {props.name} </h2>
        <p> {props.age} </p>
        <p> {props.grade} </p>
        </>
    )
}

export default StudentCard;