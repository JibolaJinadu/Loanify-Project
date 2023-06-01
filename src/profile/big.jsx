export default function Big(props){
    return(
        <>
            <div style={{fontWeight:'700',textTransform:'capitalize'}}>{props.bold}</div>
            <div>{props.tiny}</div>
        </>
    )
}