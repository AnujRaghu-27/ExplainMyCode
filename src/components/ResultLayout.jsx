function ResultLayout(){

    return (
        <div id="result-container">

            <h1 className="header">Code Analysis</h1>

            <div className="main-content">
                
                <div className="code-container">
                    <h1>Code</h1>
                    <textarea rows={20} cols={75} placeholder="User code will appear here..." readOnly/>
                    <br/>
                    <button className="edit">Edit</button>
                    <button className="re-analyze">Re-Analyze</button>
                </div>

                <div className="output-container">
                    <div className="card">
                        <h2>Language</h2>
                        <p>Detected Language</p>
                    </div>

                    <div className="card">
                        <h2>Explanation</h2>
                        <p>Code Explanation</p>
                    </div>

                    <div className="card">
                        <h2>Concepts</h2>
                        <p>Concepts Used</p>
                    </div>

                    <div className="card">
                        <h2>Complexity</h2>
                        <p>Time Complexity: O(n)</p>
                        <p>Space Complexity: O(1)</p>
                    </div>

                    <div className="card">
                        <h2>Improvements</h2>
                        <p>Suggested Improvements</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ResultLayout