import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001'}),
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => 'notes',
        }),
        addNote: builder.mutation({
            query: (note) => ({
                url: 'notes',
                method: 'POST',
                body: note
            }),
        }),
        updateNote: builder.mutation({
            query: (note) => ({
                url: `notes/${note.id}`,
                method: 'PATCH',
                body: note
            })
        }),
        deleteNote: builder.mutation({
            query: ({ id }) => ({
                url: `notes/${id}`,
                method: 'DELETE',
                body: id
            })
        })
    })
})

export const { useGetNotesQuery, useAddNoteMutation, useUpdateNoteMutation, useDeleteNoteMutation } = apiSlice
