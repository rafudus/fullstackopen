import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVotes, setAll] = useState(0)
  const [votes, setVotes] = useState([])
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const Statistics = () => {
    if (votes.length === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    return (
        <div>
        <span>good {good}</span><br/>
        <span>neutral {neutral}</span><br/>
        <span>bad {bad}</span><br/>
        <span>all {allVotes}</span><br/>
        <span>average {average}</span><br/>
        <span>positive {positive} %</span><br/>
        </div>
    )

    
  }
  function averageFun (votes) {
    let sum = 0

    for (let i = 0; i < votes.length; i++)
      sum += votes[i]
    
    return sum/votes.length
  }

  function positiveFun (votes) {
    let timesPos = 0

    timesPos = getOccurrence(votes, 1)

    return (timesPos * 100)/votes.length
  }

  function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

  const handleGoodClick = () => {
    setAll(allVotes + 1)
    setGood(good + 1)
    const votes2 = votes.concat(1);
    setVotes(votes2)
    setAverage(averageFun(votes2))
    setPositive(positiveFun(votes2))
  }

  const handleNeutralClick = () => {
    setAll(allVotes + 1)
    setNeutral(neutral + 1)
    const votes2 = votes.concat(0);
    setVotes(votes2)
    setAverage(averageFun(votes2))
    setPositive(positiveFun(votes2))
  }
  
  const handleBadClick = () => {
    setAll(allVotes + 1)
    setBad(bad + 1)
    const votes2 = votes.concat(-1);
    setVotes(votes2)
    setAverage(averageFun(votes2))
    setPositive(positiveFun(votes2))
  }
  
  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h2>Statistics</h2>
      <Statistics />
    </div>
  )
}
export default App