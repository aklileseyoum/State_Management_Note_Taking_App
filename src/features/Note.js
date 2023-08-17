import React from 'react';
import { useGetNotesQuery } from './api/apiSlice';
import SingleNote from './singleNote';

function NoteApp() {
  const { data: notes, isLoading, isError } = useGetNotesQuery();
  
  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Error...</p>;
  } else {
    content = notes.map(note => <SingleNote key={note.id} note={note} />);
  }
  
  return <div>{content}</div>;
}

export default NoteApp;

