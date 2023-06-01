import Top from "./top";
import './sort.css'
import Big from "./big";
import Input from "./input";
import Switch from "./switch";
import Buttons from "./buttons";

export default function Combine(){
    return(
        <div className="main"> 
            <Top />
            <Big bold={'personal information'}/>
            <Input />
            <Switch label='notif'/>
            <Buttons/>
        </div>
    )
}