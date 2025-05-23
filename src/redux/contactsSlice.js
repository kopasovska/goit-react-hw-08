import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact, updateContact } from "./contactsOps";
import { isAnyOf } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";

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
        .addMatcher(isAnyOf(fetchContacts.rejected, deleteContact.rejected, addContact.rejected, updateContact.rejected), (state, action) => {
            state.error = action.payload;
        })
        .addMatcher(isAnyOf(fetchContacts.pending, deleteContact.pending, addContact.pending, updateContact.pending), (state, action) => {
            state.error = null;
            state.isLoading = true;
        })
        .addMatcher(isAnyOf(fetchContacts.fulfilled, deleteContact.fulfilled, addContact.fulfilled, updateContact.fulfilled), (state, action) => {
            state.isLoading = false;
        })
    }
});

export const contactsReducer = contactSlice.reducer;

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) => {
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
} )
