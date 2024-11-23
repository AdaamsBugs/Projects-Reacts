
export const Usercard = (props) => {
  
  console.log(props.data)
    


  return (
    <div className="container">
        <img src= {props.data.picture.large} alt="Image" className="Image" />
        <h2>Name : {props.data.name.first}</h2>
        <h2>CellNO : {props.data.phone}</h2>
        <h2>Adress : {props.data.location.city}</h2>
        <h2>Gender : {props.data.gender}</h2> 
        <h2>AGE : {props.data.registered.age}</h2> 
    
    

    </div>
  )
}







