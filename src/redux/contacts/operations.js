import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (items, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', items);
      toast.success('We have created new contact.');
      return response.data;
    } catch (error) {
      toast.error('Unable to create new contact.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('Goodbye.We never see again');
      return response.data;
    } catch (error) {
      toast.error('Oops');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
