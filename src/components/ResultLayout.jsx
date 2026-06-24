import Editor from "@monaco-editor/react"

function ResultLayout({ code, setCode, handleAnalyze, analysis, isLoading, isEditing, handleEdit }) {

    return (
        <div className="container">
            <div className="header">
                <div className="logo">
                    <div className="logo-icon">
                        &lt;/&gt;
                    </div>
                    <h1> Explain<span>MyCode</span></h1>
                </div>

                <div className="header-btns">
                    <button className="edit" onClick={handleEdit} disabled={analysis ? false : true}>{isEditing ? "Save Changes" : "Edit"}</button>
                    <button className="analyze" onClick={handleAnalyze} disabled={isLoading}>{isLoading ? "Analyzing..." : analysis ? "Re-Analyze" : "Analyze Code"}</button>
                </div>
            </div>


            <div className="main-content">

                <div className="code-container">
                    <h1>Code</h1>
                    <Editor height="550px" theme="vs-dark" value={code} onChange={(value) => setCode(value)} options={{ readOnly: analysis ? !isEditing : false, fontSize:14 }} />
                    <br />

                    <div className="tip">
                        Paste your code above and click "Analyze Code" to get started.
                    </div>
                </div>

                <div className="output-container">
                    <div className="analysis-header">
                        <h2>Code Analysis</h2>

                        <div className="language">
                            <p>{analysis ? analysis.language : "--"}</p>
                        </div>
                    </div>

                    <div className="box">


                        <div className="complexity">
                            <h3>TIME COMPLEXITY</h3>
                            <p>{analysis ? analysis.timeComplexity : "--"}</p>
                        </div>
                        <div className="complexity">
                            <h3>SPACE COMPLEXITY</h3>
                            <p>{analysis ? analysis.spaceComplexity : "--"}</p>
                        </div>

                    </div>

                    <div className="card">
                        <h2>EXPLANATION</h2>
                        <p>{analysis ? analysis.explanation : "Analyze your code to get a detailed explanation."}</p>
                    </div>

                    <div className="card">
                        <h2>KEY CONCEPTS</h2>
                        <p>{analysis ? analysis.concepts.join(", ") : "Concepts will appear here after analysis."}</p>
                    </div>
                    <div className="card">
                        <h2>IMPROVEMENTS</h2>
                        <p>{analysis ? analysis.improvements : "Suggestions for improving your code will appear here."}</p>
                    </div>

                    <div className="card">
                        <h2>EXPECTED OUTPUT</h2>
                        <pre>{analysis ? analysis.output : "Run analysis to see the expected output."}</pre>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResultLayout