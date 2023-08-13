import React from 'react';
import { useSelector } from 'react-redux';
import SingleNote from './singleNote';

function NoteApp() {
  // const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);

  // const [editMode, setEditMode] = useState(null);
  // const [editedText, setEditedText] = useState('');

  // const handleEditNote = (id, text) => {
  //   setEditMode(id);
  //   setEditedText(text);
  // };

  // const handleSaveEdit = (id) => {
  //   dispatch(editNote({ id, text: editedText }));
  //   setEditMode(null);
  //   setEditedText('');
  // };

  // const handleDeleteNote = id => {
  //   console.log(id);
  //   dispatch(deleteNote(id));
  // };

  return (
    <div>
      <ul className='tasklists'>
      {notes.map(note => (
        <li key={note.id}>
          <SingleNote note={note}/>
          {/* {editMode === note.id ? (
            <>
              <textarea
                type="text"
                value={editedText}
                onChange={e => setEditedText(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(note.id)}>Save</button>
            </>
          ) : (
            <>
              <span className='todo'>{note.text}</span>
              <button onClick={() => handleEditNote(note.id, note.text)}
              style={{
                borderRadius: 25,
                padding: 10,
                border: "1px solid white",
                color: "rgb(65, 27, 27)",
                backgroundColor: "antiquewhite",
                margin: 5,
            }}
              >Edit</button>
              <button onClick={() => handleDeleteNote(note.id)}
              style={{
                borderRadius: 25,
                padding: 10,
                border: "1px solid white",
                color: "rgb(65, 27, 27)",
                backgroundColor: "antiquewhite",
                margin: 5,
            }}
              >Delete</button>
            </>
          )} */}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default NoteApp;
