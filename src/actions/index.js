import {FETCH_POSTS, API_BASE_URL, API_KEY, CREATE_POST, FETCH_POST, DELETE_POST} from '../constants/index';
import axios from 'axios';


export function fetchPosts() {
    const request = axios.get(`${API_BASE_URL}/posts?key=${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(post, redirect) {
    const request = axios.post(`${API_BASE_URL}/posts?key=${API_KEY}`, post)
        .then(() => redirect());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${API_BASE_URL}/posts/${id}?key=${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, redirect) {
    const  request = axios.delete(`${API_BASE_URL}/posts/${id}?key=${API_KEY}`)
        .then(() => redirect());

    return {
        type: DELETE_POST,
        payload: id
    }
}