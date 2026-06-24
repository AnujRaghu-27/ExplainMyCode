import {useState} from "react"
import ResultLayout from "./components/ResultLayout"
import AI from "./gemini"

function App(){

  const [code,setCode]=useState("")
  const[isLoading,setIsLoading]=useState(false)
  const[analysis,setAnalysis]=useState(null)
  const[isEditing,setIsEditing]=useState(false)

  function handleEdit(){
        if (isEditing){
          setIsEditing(false)
        }else{
          setIsEditing(true)}
    }

  async function handleAnalyze() {

    if(!code.trim()){
      alert("Please enter some code first.")
      return
    }

    setIsEditing(false)

    setIsLoading(true);
    try{
      const response = await AI.models.generateContent({
      model: "gemini-3.1-flash-lite",
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

                  "explanation": Explain the code step by step in simple beginner-friendly language.
                                - Explain what each major part of the code does.
                                - Mention important conditions, loops, function calls, and control flow.
                                - Explain why break, continue, return, or other control statements affect execution.
                                - Avoid generic phrases like "the code consists of".
                                - Write as if teaching a beginner who is seeing the code for the first time.
                                - Use multiple short paragraphs when necessary.,

                  "concepts": Return only the programming concepts that are necessary to understand the code.
                              Examples:
                                      - Loops
                                      - Conditional Statements
                                      - Arrays
                                      - Objects
                                      - Functions
                                      - Recursion
                                      - Classes
                                      - OOP
                                      - Sorting
                                      - Searching
                                      - Binary Search
                                      - Merge Sort
                                      - Hash Map
                                      - Break Statement
                                      - Continue Statement
                                      - Async/Await
                                      - Promises
                                      - API Calls
                                      - JSON Parsing
                                      - Error Handling
                                      - React
                                      - Hooks
                                      - State Management
                                      - Conditional Rendering
                                      - Event Handling
                                      - Higher-Order Functions
                                      - Filtering
                                      - Mapping
                                      - Array Methods
                                      - Arrow Functions
                              
                              Do not include Async/Await unless the code explicitly uses async or await keywords.
                              Do not include Promises unless Promise objects, .then(), .catch(), or Promise APIs are used.
                              Only include concepts that are central to understanding the code.

                              Higher-Order Functions should only be returned when:
                              The code is primarily about map(), filter(), reduce(), callbacks, function composition, or functions returning functions.

                              Do NOT return Higher-Order Functions simply because a callback function appears inside another concept such as:
                              - Promise chains
                              - Event listeners
                              - React hooks

                              For React components:
                              Prefer State Management and Conditional Rendering over Functions.

                              For Binary Search:
                              Prefer Binary Search over Loops.


                              When a specific concept exists, prefer it over a generic concept.

                              Examples:
                              - Binary Search instead of Searching
                              - Merge Sort instead of Sorting
                              - Hash Map instead of Object
                              - Async/Await instead of Asynchronous Programming
                              - State Management instead of Variables
                              - Depth First Search (DFS) instead of Graphs when DFS traversal is implemented
                              - Breadth First Search (BFS) instead of Graph Traversal when BFS is used
                              - Adjacency List instead of Arrays when a graph is stored as neighbor lists

                              Only include concepts that are central to understanding the code.
                              Do not include concepts that are merely present but unimportant.

                              Return 1 to 6 concepts maximum.
                              Only return concepts that are truly important.
                              Do not add extra concepts to reach a minimum count.

                  "timeComplexity": Return ONLY the Big O notation.
                                    Examples:
                                    O(1)
                                    O(n)
                                    O(log n)
                                    O(n²)

                                    Do not include any explanation.
                                    If the code primarily performs UI rendering, state management, API calls, or event handling and no meaningful algorithmic complexity exists, return O(1).,

                  "spaceComplexity": Return ONLY the Big O notation.
                                     Examples:
                                     O(1)
                                     O(n)

                                     Do not include any explanation.
                                     If the code primarily performs UI rendering, state management, API calls, or event handling and no meaningful algorithmic complexity exists, return O(1).,

                  "improvements": Suggest only practical improvements.
                                  Priority:
                                  1. Bug fixes
                                  2. Better readability
                                  3. Better performance
                                  4. Better maintainability

                                  Improvements must be specific to the given code.
                                  Reference actual variables, conditions, loops, or statements whenever possible.
                                  Avoid generic suggestions that could apply to any code.

                                  Avoid advanced language-specific suggestions such as:
                                  - Type hints
                                  - Docstrings
                                  - Framework-specific patterns
                                  - Enterprise-level best practices

                                  Explain WHY the improvement is useful.

                                  Examples:
                                  - Declare 'i' using let to avoid creating a global variable.
                                  - Use meaningful variable names.
                                  - Remove redundant loops.
                                  - Simplify conditions.

                                  If the code is already clean and no meaningful improvement exists, return:
                                  "No improvements needed."

                  "output": Return the expected output only if it can be determined directly from the code.
                              If the code does not produce console output, printed output, or a clear return value visible to the user, return:
                              "No direct output."
                }

                Code:${code}`
    });

    const result=response.text.replace("```json","").replace("```","")

    const data=JSON.parse(result)

    setAnalysis(data)
  }
  catch(error){
    console.log(error)
    alert("Unable to analyze code right now.\n\nPossible reasons:\n• Daily AI usage limit reached\n• AI service temporarily unavailable\n\nPlease try again later.") 
  }
  finally{
    setIsLoading(false)
  }
}
  return (
    <div>
          <ResultLayout code={code} setCode={setCode} handleAnalyze={handleAnalyze} analysis={analysis} isLoading={isLoading} isEditing={isEditing} handleEdit={handleEdit}/>
    </div>    
  )
}

export default App