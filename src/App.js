import './App.css';
import NoteApp from './features/Note';
import { useState } from 'react';
import { useAddNoteMutation } from './features/api/apiSlice';

function App() {
  const[note, setNote] = useState();
  const[addNote] = useAddNoteMutation();

  const handleAddNote = (e) => {
    e.preventDefault(); 
    addNote({ text: note});
    setNote(''); 
    window.location.reload();
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
