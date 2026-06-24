import Editor from "@monaco-editor/react"

function ResultLayout({code,setCode,handleAnalyze,analysis,isLoading,isEditing,handleEdit}){

    return (
        <div className="result-container">
            <h1>ExplainMyCode</h1>

            <div className="main-content">
                
                <div className="code-container">
                    <h1>Code</h1>
                    <Editor height="400px" theme="vs-dark" value={code} onChange={(value)=>setCode(value)} options={{readOnly:analysis? !isEditing : false}}/>
                    <br/>
                    <button className="edit" onClick={handleEdit} disabled={analysis?false :true}>{isEditing?"Save Changes":"Edit"}</button>
                    <button className="re-analyze" onClick={handleAnalyze} disabled={isLoading}>{isLoading?"Analyzing...": analysis? "Re-Analyze" : "Analyze Code"}</button>
                </div>

                <div className="output-container">
                    <div className="card">
                        <h2>Language</h2>
                        <p>{analysis? analysis.language : "Waiting for analysis..."}</p>
                    </div>

                    <div className="card">
                        <h2>Explanation</h2>
                        <p>{analysis? analysis.explanation : "Waiting for analysis..."}</p>
                    </div>

                    <div className="card">
                        <h2>Concepts</h2>
                        <p>{analysis? analysis.concepts.join(", ") : "Waiting for analysis..."}</p>
                    </div>

                    <div className="card">
                        <h2>Complexity</h2>
                        <p>Time Complexity: {analysis? analysis.timeComplexity : "Waiting for analysis..."}</p>
                        <p>Space Complexity: {analysis? analysis.spaceComplexity : "Waiting for analysis..."}</p>
                    </div>

                    <div className="card">
                        <h2>Improvements</h2>
                        <p>{analysis? analysis.improvements : "Waiting for analysis..."}</p>
                    </div>

                    <div className="card">
                        <h2>Expected Output</h2>
                        <pre>{analysis? analysis.output : "Waiting for analysis..."}</pre>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResultLayout