import{useState,useEffect} from "react"
import List from "./List";
import data from "./data";

function App() {
  const[people,setpeople] = useState(data)
  return(
     <main>
          <section className="container">
            <h3>{people.length}birthdays today </h3>
            <List people ={people}/>
            <button onClick={()=>console.log("youclicked me")}>Clear all</button> 
          </section>  
        </main>
  );
          
}
export default App;