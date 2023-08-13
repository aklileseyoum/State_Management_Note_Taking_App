// noteSlice.js
import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    editNote: (state, action) => {
      const { id, text } = action.payload;
      console.log(id, text);
      const note = state.find(note => note.id === id);
      if (note) {
        note.text = text;
      }
    },
    deleteNote: (state, action) => {
      const idToDelete = action.payload;
      return state.filter(note => note.id !== idToDelete);
    },
  },
});

export const { addNote, editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
