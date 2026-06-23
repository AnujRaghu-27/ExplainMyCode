import Editor from "@monaco-editor/react";

function HomeLayout({code,setCode,handleAnalyze,isLoading}){

    return (
    <div className="container">
        <h1>ExplainMyCode</h1>
        <Editor height="400px" theme="vs-dark" value={code} onChange={(value)=>setCode(value)}/>
        <br/>
        <button className="Analyze" onClick={handleAnalyze} disabled={isLoading}>{isLoading?"Analyzing...":"Analyze"}</button>
    </div>
  )
}

export default HomeLayout

