import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact, updateContact } from "./operations";
import { isAnyOf } from "@reduxjs/toolkit";
import { logoutThunk } from "../auth/operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(updateContact.fulfilled, (state, action) => {
            state.items = state.items.map(item => item.id === action.payload.id ? action.payload : item);
        })
        .addCase(logoutThunk.fulfilled, () => initialState)
        .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected, updateContact.rejected), (state, action) => {
            state.error = action.payload;
        })
        .addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending, updateContact.pending), (state) => {
            state.error = null;
            state.isLoading = true;
        })
        .addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled, updateContact.fulfilled), (state) => {
            state.isLoading = false;
        })
    }
});

export const contactsReducer = contactSlice.reducer;