import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {deleteEventApi, getAllEventsApi, getEventByIdApi, saveEventApi} from "../../api/eventsApi";

const initialState = {
    events: [], // list of events
    selectedEvent: null, // currently selected event,
    isLoading: false,
}

export const getAllEvents = createAsyncThunk(
    'event/getAllEvents',
    async (_, thunkAPI) => {
        thunkAPI.dispatch(setLoading())
        const response = await getAllEventsApi(); // return get response from the api
        thunkAPI.dispatch(updateEvents(response.data)); // passing the response to the reducer function including the response
        return response.data
    }
);

export const getEventById = createAsyncThunk(
    'event/getEventById',
    async (eventId, thunkAPI) => {
        thunkAPI.dispatch(setLoading())
        const response = await getEventByIdApi(eventId); // return get response from the api
        thunkAPI.dispatch(updateSelectedEvent(response.data)); // passing the response to the reducer function including the response
        return response.data
    }
);

export const saveEvent = createAsyncThunk(
    'event/saveEvent',
    async (event, thunkAPI) => {
        thunkAPI.dispatch(setLoading())
        const response = await saveEventApi(event); // will execute save api call and return a response
        thunkAPI.dispatch(getAllEvents()); // dispatch get all events function
        return response.data
    }
);

export const deleteEventById = createAsyncThunk(
    'event/deleteEventById',
    async (eventId, thunkAPI) => {
        thunkAPI.dispatch(setLoading())
        const response = await deleteEventApi(eventId); // return get response from the api
        thunkAPI.dispatch(getAllEvents()); // dispatch get all events function
        return response.data
    }
);

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        updateEvents: (state, action) => {
            state.events = action.payload;
            state.isLoading = false;
        },
        updateSelectedEvent: (state, action) => {
            state.selectedEvent = action.payload;
            state.isLoading = false;
        },
        setLoading: (state) => {
            state.isLoading = !state.isLoading;
        }
    },
})

// Action creators are generated for each case reducer function
export const {updateEvents, updateSelectedEvent, setLoading} = eventSlice.actions

export default eventSlice.reducer