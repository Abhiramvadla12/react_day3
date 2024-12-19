import './header.css'
import {menu1} from "./header_data1"
const Header1 = ()=>{
   
   
    return (
        <>
        <div className="header" >
                <div className="nav">
                    <ul>
                        <>
                           
                            {menu1.map((element, index) => (
                                    <li key={index}><a href={element.path}>{element.menuItem}</a></li>
                            ))}
                        </>
                        
                    </ul>
                </div>
            
        </div>
        </>
    )
}
export default Header1;






