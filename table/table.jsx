
import './table.css'
import TableData from './TableData'
const Table = () => {
  return (
    <>
      <table >
        <thead>
          <tr>
            <th>Id</th>
            <th>name</th>
            <th>age</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          <TableData />
        </tbody>
      </table>
    </>
  )
}

export default Table
