import React, { useState } from 'react';
import { useUpdateNoteMutation, useDeleteNoteMutation } from './api/apiSlice';

function SingleNote({ note }) {
    const [updateNoteMutation] = useUpdateNoteMutation();
    const [deleteNoteMutation] = useDeleteNoteMutation();

    const [editMode, setEditMode] = useState(false);
    const [editedText, setEditedText] = useState('');

    const handleEditNote = () => {
        setEditMode(true);
        setEditedText(note.text);
    };

    const handleSaveEdit = async () => {
        updateNoteMutation({ id: note.id, text: editedText });
        setEditMode(false);
        window.location.reload();
    };

    const handleDeleteNote = async () => {
        deleteNoteMutation({ id: note.id });
        window.location.reload();
    }

    return (
        <div className='lists'>
            {editMode ? (
                <>
                    <textarea
                        type="text"
                        value={editedText}
                        onChange={e => setEditedText(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Save</button>
                </>
            ) : (
                <>
                    <span className='todo'>{note.text}</span>
                    <button
                        onClick={handleEditNote}
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
                        onClick={handleDeleteNote}
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
            )}
        </div>
    );
}

export default SingleNote;

