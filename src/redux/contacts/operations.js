import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitAPI } from '../auth/operations';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await goitAPI.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(id, thunkAPI) => {
    try {
        await goitAPI.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async(body, thunkAPI) => {
    try {
        const response = await goitAPI.post(`/contacts/`, body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateContact = createAsyncThunk('contacts/updateContact', async(body, thunkAPI) => {
    try {
        const response = await goitAPI.patch(`/contacts/${body.id}`, body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});