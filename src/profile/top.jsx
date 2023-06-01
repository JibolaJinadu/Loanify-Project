import Buttons from "./buttons";
import HighLighted from "./highLighted";
import Small from "./small";
import './sort.css'


export default function Top(){
    return(
        <div style={{display:'flex',justifyContent:'space-between'}}>
            
            <div className="shift">
                <Small />
                <HighLighted />
            </div>
            <div>
                <button style={{backgroundColor:'white',borderRadius:'6px',padding:'7px'}}>edit image</button>
            </div>

        </div>
    )
}