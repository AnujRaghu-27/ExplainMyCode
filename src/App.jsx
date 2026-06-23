import {useState} from "react"
import HomeLayout from "./components/HomeLayout"
import ResultLayout from "./components/ResultLayout"
import AI from "./gemini"

function App(){

  const [showResult,setShowResult]=useState(false)
  const [code,setCode]=useState("")
  const[isLoading,setIsLoading]=useState(false)
  const[analysis,setAnalysis]=useState("")

  async function handleAnalyze() {

    if(!code.trim()){
      alert("Please enter some code first.")
      return
    }

    setIsLoading(true);
    try{
      const response = await AI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Analyze this code.
                Rules:
                - Return ONLY valid JSON.
                - Concepts should contain only important programming concepts.
                - Do not include print(), range(), console.log().
                - Use beginner-friendly concepts like Loops, Arrays, Objects, Recursion, Functions, OOP, Algorithms, Data Structures.
                - Avoid terms like Control Flow, Execution Semantics, Scope Resolution.
                - Output must preserve line breaks exactly.

                Return this JSON:
                {
                  "language": "",
                  "explanation": "",
                  "concepts": Only include concepts that are central to understanding the code.
                              Do not include Variables or Functions unless they are a major part of the solution.,
                  "timeComplexity": Return ONLY the Big O notation.
                                    Examples:
                                    O(1)
                                    O(n)
                                    O(log n)
                                    O(n²)

                                    Do not include any explanation.,
                  "spaceComplexity": Return ONLY the Big O notation.
                                     Examples:
                                     O(1)
                                     O(n)

                                     Do not include any explanation.,
                  "improvements": Only suggest improvements if they genuinely improve readability,performance, maintainability, or code quality.
                                  Do not invent improvements for already simple and correct code.

                                  If no meaningful improvement exists, return:
                                  "No improvements needed.",
                  "output": ""
                }

                Code:${code}`
    });

    const result=response.text.replace("```json","").replace("```","")

    const data=JSON.parse(result)

    setAnalysis(data)
    setShowResult(true)
  }
  catch(error){
    console.log(error)
    alert("Failed to analyze code.\n\nPossible reasons:\n• Daily AI usage limit reached\n• AI service temporarily unavailable\n\nPlease try again later.") 
  }
  finally{
    setIsLoading(false)
  }
}
  return (
    <div>
        {showResult?(
          <ResultLayout code={code} setCode={setCode} handleAnalyze={handleAnalyze} analysis={analysis} isLoading={isLoading}/>
        ):(
          <HomeLayout code={code} setCode={setCode} handleAnalyze={handleAnalyze} isLoading={isLoading}/>
        )}
    </div>    
  )
}

export default App