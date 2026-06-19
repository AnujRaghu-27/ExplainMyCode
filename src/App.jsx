import {useState} from "react"
import HomeLayout from "./components/HomeLayout"
import ResultLayout from "./components/ResultLayout"

function App(){

  const [showResult,setShowResult]=useState(false)
  return (
    <div>
        {showResult?(
          <ResultLayout/>
        ):(
          <HomeLayout setShowResult={setShowResult}/>
        )}
    </div>
  )
}

export default App