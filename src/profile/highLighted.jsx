import Big from "./big";
import './sort.css'

export default function HighLighted(){
    return(
        <div className="dev down">
            <div><Big bold={'Oluwafemi ayo'}/></div>
            <div className="move">
                <div>
                    <Big tiny={'role:'}/>
                </div>
                <div>
                    <Big tiny={'Senior Loan Officer'}/>
                </div>
            </div>
            <div className="move">
                <div>
                    <Big tiny={'Status:'}/>
                </div>
                <div style={{color:'green'}}>
                    <Big tiny={'Active'}/>
                </div>
            </div>
            
            


        </div>
    )
}