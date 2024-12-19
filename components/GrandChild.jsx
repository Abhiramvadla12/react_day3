

const GrandChild = (props) => {
  return (
    <>
      <h1>HELLO GURU PREMA KOSAME</h1>
      {props.child_data.map((element,index)=>(
        <>
            <h3 key={index}>Hi MR.
                {element.name} ,how are you
            </h3>
        </>
        
      ))}

    </>
  )
}

export default GrandChild
