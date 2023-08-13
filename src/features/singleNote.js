import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote, deleteNote } from './noteSlice';
// import DisplayNote from './displayNote';

function SingleNote({ note }) {
    const dispatch = useDispatch();

    const [editMode, setEditMode] = useState(null);
    const [editedText, setEditedText] = useState('');
    const [deleteMode, setDeleteMode] = useState(null);

    const handleEditNote = (id, text) => {
        setEditMode(id);
        setEditedText(text);
    };

    const handleSaveEdit = (id) => {
        console.log(id);
        dispatch(editNote({ id, text: editedText }));
        console.log(editNote);
        setEditMode(null);
        setEditedText('');
    };

    const handleDeleteNote = (id) => {
        console.log(id);
        setDeleteMode(id);
    }

    // const handleDeleteNote = (id) => {
    //     dispatch(deleteNote(id)); // Passing the id as the payload to the deleteNote action
    // };
    return (
    editMode === note.id ? (
            <div className='lists'>
              <textarea
                type="text"
                value={editedText}
                onChange={e => setEditedText(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(note.id)}>Save</button>
            </div>
          ) : deleteMode !== note.id ? (
            <div className='lists'>
                
              <span className='todo'>{note.text}</span>
              <button
                onClick={() => handleEditNote(note.id, note.text)}
                style={{
                  borderRadius: 25,
                  padding: 10,
                  border: "1px solid white",
                  color: "rgb(65, 27, 27)",
                  backgroundColor: "antiquewhite",
                  margin: 5,
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteNote(note.id)}
                style={{
                  borderRadius: 25,
                  padding: 10,
                  border: "1px solid white",
                  color: "rgb(65, 27, 27)",
                  backgroundColor: "antiquewhite",
                  margin: 5,
                }}
              >
                Delete
              </button>
            </div>
            // <DisplayNote note={note}/>
          ) : null
    );
}

export default SingleNote;
