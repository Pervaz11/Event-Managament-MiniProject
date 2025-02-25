import axios from "axios";
import { API_BASE_URL } from "./api";

// Get All data

export async function getAll(endpoint = "users") {
    const fullURL = API_BASE_URL + endpoint;
    console.log("API URL:", fullURL);

    const result = {
        data: null,
        loading: true,
        error: null,
    };

    try {
        const response = await axios.get(fullURL, { timeout: 5000 });
        console.log("Information:", response.data);
        result.data = response.data;
    } catch (error) {
        console.error("An error occurred:", error);
        result.error = error;
    } finally {
        result.loading = false;
        console.log("Loading finished.");
    }

    return result;
}

// Get One Data
export async function getByID(endpoint, id) {
    return getAll(`${endpoint}/${id}`);
}

// Post new data
export async function post(endpoint, payload) {
    const result = {
        data: null,
        loading: true,
        error: null,
    };

    try {
        const response = await axios.post(`${API_BASE_URL}${endpoint}`, payload);
        console.log("Axios response:", response.data);
        result.data = response.data;
    } catch (error) {
        console.error("An error occurred:", error);
        result.error = error;
    } finally {
        result.loading = false;
        console.log("Loading finished.");
    }

    return result;
}

// Delete data by ID
export async function deleteByID(endpoint, id) {
    const result = {
        data: null,
        loading: true,
        error: null,
    };

    try {
        const response = await axios.delete(`${API_BASE_URL}${endpoint}/${id}`);
        console.log("Axios response:", response.data);
        result.data = response.data;
    } catch (error) {
        console.error("An error occurred:", error);
        result.error = error;
    } finally {
        result.loading = false;
        console.log("Loading finished.");
    }

    return result;
}

// Update data by ID
export async function update(endpoint, payload, id) {
    const result = {
        data: null,
        loading: true,
        error: null,
    };

    try {
        const response = await axios.patch(`${API_BASE_URL}${endpoint}/${id}`, payload);
        console.log("Axios response:", response.data);
        result.data = response.data;
    } catch (error) {
        console.error("An error occurred:", error);
        result.error = error;
    } finally {
        result.loading = false;
        console.log("Loading finished.");
    }

    return result;
}

const controller = {
    getAll: getAll,
    getByID: getByID,
    post: post,
    deleteByID: deleteByID,
    update: update,
};

export default controller