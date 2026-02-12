import{useState,useEffect} from "react"
import List from "./List";
import data from "./data";

function App() {
  const[people,setPeople] = useState(data)
  return(
      <main>
          <section className="container">
            <h3>{people.length}birthdays today </h3>
            <List people ={people}/>
            <button 
                onClick={()=>
                  people.length ===0 ? setPeople(data): setPeople([])
              }
            >
              {length.people===0? "Refresh" :"clear All"}
            </button>
  

           
          </section>  
      </main>
  )
          
}
export default App;