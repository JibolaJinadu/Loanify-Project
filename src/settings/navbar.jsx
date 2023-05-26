import NavbarItem from "./navbarItem"

function Navbar(){
    const design ={
        display:'flex',
        gap:'10px'

    }
    return(
        
        <div style={{display:'flex',gap:'30px',flexDirection:'column'}}>
            <div>
                
                <div style={design}>
                    <NavbarItem icons={'one'} /><NavbarItem title={'dashboard'} />                
                </div> 
                <div style={design}>
                    <NavbarItem icons={'one'} /><NavbarItem title={'dashboard'} />                
                </div> 
                <div style={design}>
                    <NavbarItem icons={'one'} /><NavbarItem title={'dashboard'} />                
                </div> 
                <div style={design}>
                    <NavbarItem icons={'one'} /><NavbarItem title={'dashboard'} />                
                </div> 
                <div style={design}>
                    <NavbarItem icons={'one'} /><NavbarItem title={'dashboard'} />                
                </div> 
                <div style={design}>
                    <NavbarItem icons={'one'} /><NavbarItem title={'dashboard'} />                
                </div> 
                <div style={design}>
                    <NavbarItem icons={'one'} /><NavbarItem title={'dashboard'} />                
                </div>           
            </div>

            <div>
                <div style={design}>
                    <NavbarItem icons={'one'} /><NavbarItem title={'dashboard'} />                
                </div>           
            </div>
        </div>
        
    )
}
export default Navbar