import './App.css';
import NoteApp from './features/Note';
import { addNote } from './features/noteSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const[note, setNote] = useState();

  const handleAddNote = (e) => {
    e.preventDefault(); 
    dispatch(addNote({ text: note })); 
    setNote(''); 
  };

  return (
    <div className="App">
      <header className="App-header">
      <h2>NOTE-TAKING APP</h2>
        <form onSubmit={handleAddNote}>
          <textarea placeholder='Enter note'
          style = {{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: '1px solid rgb(65, 27, 27)',
            fontSize: 20,
            color: 'rgb(65, 27, 27)',
          }} 
          onChange={(e) => setNote(e.target.value)}
          value={note}
          />
          <button type='submit'
          style={{
            padding: 12,
            borderRadius: 25,
            fontSize: 20,
            marginLeft: 20,
            border: '1px solid rgb(65, 27, 27)',
            backgroundColor: 'rgb(65, 27, 27)',
            color: 'white',
          }}
          >Go</button>
        </form>
        <NoteApp/>
      </header>
    </div>
  );
}

export default App;
