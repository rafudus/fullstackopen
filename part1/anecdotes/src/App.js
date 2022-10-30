import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  let votes = new Uint8Array(anecdotes.length);
   
  const [selected, setSelected] = useState(0)

  const handleNext = () => {
    const min = 0;
    const max = anecdotes.length-1;
    const rand =parseInt(min + Math.random() * (max - min), 10);
    setSelected(rand)
  }

  const handleVote = () => {
    votes[selected] += 1;
    const copy = [votes]
    votes = copy
    console.log(votes)
  }

  return (
    <div>
      {anecdotes[selected]}
      <br/><button onClick={handleVote}>vote</button><button onClick={handleNext}>next anecdote</button>
    </div>
  )
}

export default App