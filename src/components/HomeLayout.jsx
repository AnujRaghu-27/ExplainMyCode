function HomeLayout({code,setCode,handleAnalyze,isLoading}){

    return (
    <div className="container">
        <h1>ExplainMyCode</h1>
        <textarea rows={20} placeholder="" value={code} onChange={(e)=>setCode(e.target.value)}/>
        <br/>
        <button className="Analyze" onClick={handleAnalyze} disabled={isLoading}>{isLoading?"Analyzing...":"Analyze"}</button>
    </div>
  )
}

export default HomeLayout