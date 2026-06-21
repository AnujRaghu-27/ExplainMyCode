import { use, useState } from "react"

function ResultLayout({code,setCode,analysisData}){

    const[isEditing,setIsEditing]=useState(false)

    function handleEdit(){
        if (isEditing){
            setIsEditing(false)
        }else{
        setIsEditing(true)}
    }

    return (
        <div id="result-container">

            <h1 className="header">Code Analysis</h1>

            <div className="main-content">
                
                <div className="code-container">
                    <h1>Code</h1>
                    <textarea rows={20} cols={75} placeholder="User code will appear here..." value={code} readOnly={!isEditing} onChange={(e)=>setCode(e.target.value)}/>
                    <br/>
                    <button className="edit" onClick={handleEdit}>{isEditing?"Save Changes":"Edit"}</button>
                    <button className="re-analyze">Re-Analyze</button>
                </div>

                <div className="output-container">
                    <div className="card">
                        <h2>Language</h2>
                        <p>{analysisData.language}</p>
                    </div>

                    <div className="card">
                        <h2>Explanation</h2>
                        <p>{analysisData.explanation}</p>
                    </div>

                    <div className="card">
                        <h2>Concepts</h2>
                        <p>{analysisData.concepts.join(",")}</p>
                    </div>

                    <div className="card">
                        <h2>Complexity</h2>
                        <p>Time Complexity: {analysisData.timeComplexity}</p>
                        <p>Space Complexity: {analysisData.spaceComplexity}</p>
                    </div>

                    <div className="card">
                        <h2>Improvements</h2>
                        <p>{analysisData.improvements}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResultLayout