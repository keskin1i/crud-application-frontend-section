// src/services/KisiService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/kisiler'; // Doğru URL

class KisiService {
    async getAllKisiler() {
        try {
            return await axios.get(API_URL);
        } catch (error) {
            console.error("There was an error fetching the records!", error);
        }
    }

    async createKisi(kisi) {
        try {
            return await axios.post(API_URL, kisi);
        } catch (error) {
            console.error("There was an error creating the record!", error);
        }
    }

    async updateKisi(id, kisi) {
        try {
            return await axios.put(`${API_URL}/${id}`, kisi);
        } catch (error) {
            console.error("There was an error updating the record!", error);
        }
    }

    async deleteKisi(id) {
        try {
            return await axios.delete(`${API_URL}/${id}`);
        } catch (error) {
            console.error("There was an error deleting the record!", error);
        }
    }
}

export default new KisiService();
