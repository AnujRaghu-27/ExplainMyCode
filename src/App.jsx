import {useState} from "react"
import HomeLayout from "./components/HomeLayout"
import ResultLayout from "./components/ResultLayout"
import analysisData from "./analysisData"

function App(){

  const [showResult,setShowResult]=useState(false)
  const [code,setCode]=useState("")

  return (
    <div>
        {showResult?(
          <ResultLayout code={code} setCode={setCode} analysisData={analysisData}/>
        ):(
          <HomeLayout code={code} setCode={setCode} setShowResult={setShowResult}/>
        )}
    </div>
  )
}

export default App