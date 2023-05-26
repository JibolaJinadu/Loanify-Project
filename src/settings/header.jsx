import NavbarItem from "./navbarItem"
import './myStyle.css'

function Header(){
    return(
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
                <NavbarItem icons={'logo'}/>
            </div>
            
            <div style={{display:'flex',gap:'20px'}}>                
                <NavbarItem icons={'message'}/>
                <NavbarItem icons={'bell'}/>
                <NavbarItem icons={'avatar'}/>
            </div>
            
        </div>
    )
}
export default Header