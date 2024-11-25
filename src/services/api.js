// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Use environment variable for base URL
    timeout: 30000, // Set a timeout limit (10 seconds here)
    headers: {
        'Content-Type': 'application/json', // Set default headers
    },
});

// Optional: Add interceptors for request and response logging, handling errors, etc.
api.interceptors.response.use(
    response => response,
    error => {
        // Handle errors, e.g., by logging or showing notifications
        return Promise.reject(error);
    }
);

export default api;
