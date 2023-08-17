import { fetchNotesApi, addNoteApi, deleteNoteApi, editNoteApi } from './api';

export const fetchNotes = () => {
    return async dispatch => {
  try {
    const notes = await fetchNotesApi(); 
    console.log(notes);
    dispatch({ type: 'notes/fetchNotes', payload: notes });
  } catch (error) {
    console.error('Error fetching notes:', error);
  }}
};

export const addNote = note => async dispatch => {
  try {
    const addedNote = await addNoteApi(note);
    dispatch({ type: 'notes/addNote', payload: addedNote });
  } catch (error) {
    console.error('Error adding note:', error);
  }
};

export const deleteNote = id => async dispatch => {
  try {
    await deleteNoteApi(id); 
    dispatch({ type: 'notes/deleteNote', payload: id });
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};

export const editNote = (id, updatedNote) => {
    return async dispatch => {
  try {
    await editNoteApi(id, updatedNote);
    dispatch({ type: 'notes/editNote', payload: { id, updatedNote } });
  } catch (error) {
    console.error('Error editing note:', error);
  }}
};
