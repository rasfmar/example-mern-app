import axios from 'axios';

const API_URI = process.env.REACT_APP_API_URI;

export const createObj = (name, successCallback, failureCallback) => {
  axios.post(API_URI, { name })
    .then((response) => {
      if (response.status === 200) {
        successCallback(response.data);
      } else {
        failureCallback(response.data.message);
      }
    }, (error) => {
      failureCallback(error.message);
    });
};

export const readAllObjs = (successCallback, failureCallback) => {
  axios.get(API_URI)
    .then((response) => {
      if (response.status === 200) {
        successCallback(response.data);
      } else {
        failureCallback(response.data.message);
      }
    }, (error) => {
      failureCallback(error.message);
    });
};

export const readObj = (id, successCallback, failureCallback) => {
  axios.get(`${API_URI}/${id}`)
    .then((response) => {
      if (response.status === 200) {
        successCallback(response.data);
      } else {
        failureCallback(response.data.message);
      }
    }, (error) => {
      failureCallback(error.message);
    });
};

export const updateObj = (id, values, successCallback, failureCallback) => {
  axios.put(`${API_URI}/${id}`, values)
    .then((response) => {
      if (response.status === 200) {
        successCallback(response.data);
      } else {
        failureCallback(response.data.message);
      }
    }, (error) => {
      failureCallback(error.message);
    });
};

export const deleteObj = (id, successCallback, failureCallback) => {
  axios.delete(`${API_URI}/${id}`)
    .then((response) => {
      if (response.status === 200) {
        successCallback(response.data);
      } else {
        failureCallback(response.data.message);
      }
    }, (error) => {
      failureCallback(error.message);
    });
};
