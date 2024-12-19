
import { array } from "./data"
const TableData = () => {
    console.log(array);
  return (
    <>
      {array.map((element,index)=>{
            return (
                <>
                    <tr key={index}>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.age}</td>
                        <td>{element.email}</td>
                        <td>
                            <>
                                <button>EDit</button>
                                <button>DElete</button>
                            </>
                        </td>
                    </tr>
                </>
        )
            
      })}
    </>
  )
}

export default TableData
