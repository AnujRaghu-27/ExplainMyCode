import {useState} from "react"
import HomeLayout from "./components/HomeLayout"
import ResultLayout from "./components/ResultLayout"
import analysisData from "./analysisData"

function App(){

  const [showResult,setShowResult]=useState(false)
  const [code,setCode]=useState("")
  const[isLoading,setIsLoading]=useState(false)

  function handleAnalyze() {
    setIsLoading(true);

    setTimeout(() => {
        setShowResult(true);
        setIsLoading(false);
    }, 2000);
}
  if (isLoading){
    return(
      <div className="loading-container">
        <h1>Analyzing your code</h1>
        <p>Please Wait...</p>
      </div>
    )
  }else{
    return (
      <div>
          {showResult?(
            <ResultLayout code={code} setCode={setCode} analysisData={analysisData} handleAnalyze={handleAnalyze}/>
          ):(
            <HomeLayout code={code} setCode={setCode} handleAnalyze={handleAnalyze}/>
          )}
      </div>
    )
  }
}

export default App