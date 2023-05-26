export default function Button(props){
    return(
            <button style={{marginInline:'10px',padding:'12px',borderRadius:'8px',border:'none',textTransform:'capitalize',color:'white',backgroundColor:'blue'}}>
                {props.move}
            </button>
    )
}