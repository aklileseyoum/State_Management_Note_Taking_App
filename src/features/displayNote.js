import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote, deleteNote } from './noteSlice';

function DisplayNote({ note }) {
    const dispatch = useDispatch();
    const [deleteMode, setDeleteMode] = useState(null);
    const handleDeleteNote = (id) => {
        setDeleteMode(id);
    };

    return (
        <>
            {deleteMode !== note.id ? (
                <>
                    <span className='todo'>{note.text}</span>
                    <button
                        // onClick={() => handleEditNote(note.id, note.text)}
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
                </>
            ) : null}
        </>
    );
}

export default DisplayNote;
