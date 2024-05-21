// apiInterceptor.js

import axios from "axios";

const setupApiInterceptor = () => {
  // Create an instance of Axios
  console.log("Hello=========");
  const instance = axios.create();

  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      // If a response is received, return it
      return response;
    },
    (error) => {
      // If there's an error response
      if (error.response && error.response.status === 401) {
        // Redirect the user to the login page
        window.location.href = "/";
      }
      // Pass the error down the promise chain
      return Promise.reject(error);
    }
  );
};

export default setupApiInterceptor;
