import './header.css'
import {menu} from "./header_data"
const Header = ()=>{
   
   
    return (
        <>
        <div className="header" >
                <div className="nav">
                    <ul>
                        <>
                           
                            {menu.map((element, index) => (
                                    <li key={index}><a href={element.path}>{element.menuItem}</a></li>
                            ))}
                        </>
                        
                    </ul>
                </div>
            
        </div>
        </>
    )
}
export default Header;






