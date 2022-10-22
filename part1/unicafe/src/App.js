import { useState } from 'react'

const StatisticLine = (props) => {
  return(
      <tr><td>{props.text}</td> <td>{props.value}</td></tr>
  )
}

const Statistics = (props) => {
  if (props.votes.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
      <table>
        <StatisticLine text="good" value ={props.good} />
        <StatisticLine text="neutral" value ={props.neutral} />
        <StatisticLine text="bad" value ={props.bad} />
        <StatisticLine text="all" value ={props.allVotes} />
        <StatisticLine text="average" value ={props.average} />
        <StatisticLine text="positive" value ={props.positive}></StatisticLine>
      </table>
  )
}

/*
  <span>good {props.good}</span><br/>
    <span>neutral {props.neutral}</span><br/>
    <span>bad {props.bad}</span><br/>
    <span>all {props.allVotes}</span><br/>
    <span>average {props.average}</span><br/>
    <span>positive {props.positive} %</span><br/>
    */

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleGoodClick}>{props.good}</button>
      <button onClick={props.handleNeutralClick}>{props.neutral}</button>
      <button onClick={props.handleBadClick}>{props.bad}</button>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVotes, setAll] = useState(0)
  const [votes, setVotes] = useState([])
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
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
      <Button handleGoodClick={handleGoodClick} handleNeutralClick={handleNeutralClick}
        handleBadClick={handleBadClick} good="good" neutral="neutral" bad="bad"/>
      <h2>Statistics</h2>
      <Statistics  good={good} neutral={neutral} bad={bad} allVotes={allVotes}
       votes={votes} average={average} positive={positive} />
    </div>
  )
}
export default App