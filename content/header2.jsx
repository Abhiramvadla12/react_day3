import './header.css'
import {menu2} from "./header_data2"
const Header2 = ()=>{
   
   
    return (
        <>
        <div className="header" >
                <div className="nav">
                    <ul>
                        <>
                           
                            {menu2.map((element, index) => (
                                    <li key={index}><a href={element.path}>{element.menuItem}</a></li>
                            ))}
                        </>
                        
                    </ul>
                </div>
            
        </div>
        </>
    )
}
export default Header2;






