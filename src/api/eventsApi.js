import {API} from "./index";

export const getAllEventsApi = async () => {
    return await API.get('/Events');
}

export const getEventByIdApi = async (id) => {
    return await API.get(`/Events/${id}`);
}

export const saveEventApi = async (data) => {
    return await API.post(`/Events`, data);
}

export const deleteEventApi = async (id) => {
    return await API.delete(`/Events/${id}`);
}

export const updateEventApi = async (event) => {
    return await API.put(`/events/${event.id}`, event);
}