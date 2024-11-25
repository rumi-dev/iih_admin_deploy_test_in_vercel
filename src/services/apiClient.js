// src/services/apiClient.js
import api from './api';

export const apiClient = {
    async get(url, params = {}) {
        try {
            const response = await api.get(url, { params });
            // console.log('get response:', response);
            return response;
        } catch (error) {
            console.error("GET request error:", error);
            throw error;
        }
    },

    async post(url, body = {}) {
        try {
            const response = await api.post(url, body);
            return response;
        } catch (error) {
            console.error("POST request error:", error);
            throw error;
        }
    },

    async put(url, body = {}) {
        try {
            const response = await api.put(url, body);
            return response;
        } catch (error) {
            console.error("PUT request error:", error);
            throw error;
        }
    },

    async delete(url) {
        try {
            const response = await api.delete(url);
            return response;
        } catch (error) {
            console.error("DELETE request error:", error);
            throw error;
        }
    },
};

export default apiClient;
