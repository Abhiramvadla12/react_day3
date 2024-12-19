import Child from "./child"


const Parent = () => {
  const parent_data = [
    {
        id:1,
        name:"abhiram",
    },
    {
        id:2,
        name:"sumanth",
    },
    {
        id:3,
        name:"srikanth",
    },{
        id:4,
        name:"saidulu",
    }
  ]
  return (
    <>
      <Child data1={parent_data}/>
    </>
  )
}

export default Parent
