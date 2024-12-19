import GrandChild from "./GrandChild";


const Child = (props) => {
    console.log(props.data1);
    const data2 = props.data1
  return (
    <>
      {/* <h1>HELLO GURU PREMA KOSAME</h1> */}
      <GrandChild child_data={data2}/>
    </>
  )
}

export default Child
