import { useState } from "react"

function HomeLayout({code,setCode,setShowResult}){

    function handlebutton(){
        setShowResult(true)
    }

    return (
    <div id="container">
        <h1>ExplainMyCode</h1>
        <textarea rows={20} cols={100} placeholder="" value={code} onChange={(e)=>setCode(e.target.value)}/>
        <br/>
        <button className="Analyze" onClick={handlebutton}>Analyze</button>
    </div>
  )
}

export default HomeLayout