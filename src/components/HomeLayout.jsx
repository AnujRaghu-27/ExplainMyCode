import { useState } from "react"

function HomeLayout({setShowResult}){

    function handlebutton(){
        setShowResult(true)
    }

    return (
    <div id="container">
        <h1>ExplainMyCode</h1>
        <textarea rows={20} cols={100} placeholder=""/>
        <br/>
        <button className="Analyze" onClick={handlebutton}>Analyze</button>
    </div>
  )
}

export default HomeLayout