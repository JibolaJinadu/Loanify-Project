import Button from "./button";
import Language from "./language";
import NavbarItem from "./navbarItem";
import Toggle from "./toggle";

export default function General(){
    const tab ={
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBlock:'20px',
        marginBlock:'20px',
        backgroundColor:'rgb(240,244,252)',
        textTransform:'capitalize',
        fontWeight:'600'

        
    }
    return(
        <div style={{margin:'50px',height:'40vh',maxWidth:'90vw'}}>
            <div style={tab}>
                <NavbarItem title={'date & time'} />
                <Button move={'edit'} />
            </div>

            <div style={tab}>
                <NavbarItem title={'dark mode'} />
                <Toggle label='notif' />
            </div>

            <div style={tab}>
                <NavbarItem title={'updates'} />
            </div>

            <div style={tab}>
                <NavbarItem title={'language'} />
                <Language  placeholder='language' />
            </div>

            <div style={tab}>
                <NavbarItem title={'legal and registory'} />
            </div>

            <div style={tab}>
                <NavbarItem title={'sign out'} />
                <Button move={'signout'} />
            </div>

            



        </div>
    )
}