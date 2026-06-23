import { use, useState } from "react"

function ResultLayout({code,setCode,handleAnalyze,analysis,isLoading}){

    const[isEditing,setIsEditing]=useState(false)

    function handleEdit(){
        if (isEditing){
            setIsEditing(false)
        }else{
        setIsEditing(true)}
    }

    return (
        <div className="result-container">

            <h1 className="header">Code Analysis</h1>

            <div className="main-content">
                
                <div className="code-container">
                    <h1>Code</h1>
                    <textarea rows={20} placeholder="User code will appear here..." value={code} readOnly={!isEditing} onChange={(e)=>setCode(e.target.value)}/>
                    <br/>
                    <button className="edit" onClick={handleEdit}>{isEditing?"Save Changes":"Edit"}</button>
                    <button className="re-analyze" onClick={handleAnalyze} disabled={isLoading}>{isLoading?"Analyzing...":"Re-Analyze"}</button>
                </div>

                <div className="output-container">
                    <div className="card">
                        <h2>Language</h2>
                        <p>{analysis.language}</p>
                    </div>

                    <div className="card">
                        <h2>Explanation</h2>
                        <p>{analysis.explanation}</p>
                    </div>

                    <div className="card">
                        <h2>Concepts</h2>
                        <p>{analysis.concepts.join(",")}</p>
                    </div>

                    <div className="card">
                        <h2>Complexity</h2>
                        <p>Time Complexity: {analysis.timeComplexity}</p>
                        <p>Space Complexity: {analysis.spaceComplexity}</p>
                    </div>

                    <div className="card">
                        <h2>Improvements</h2>
                        <p>{analysis.improvements}</p>
                    </div>

                    <div className="card">
                        <h2>Expected Output</h2>
                        <pre>{analysis.output}</pre>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResultLayout