import axios from "axios";

export const getAxiosInstance = () => {
  const ai = axios.create({
    baseURL: "https://referral-backend-7osf.onrender.com",
  });

  // Add a response interceptor
  ai.interceptors.response.use(
    (response) => {
      // If a response is received, return it
      return response;
    },
    (error) => {
      // If there's an error response
      if (error.response && error.response.status === 401) {
        // Redirect the user to the login page
        localStorage.removeItem("token");
        window.location.href = "/";
      }
      // Pass the error down the promise chain
      return Promise.reject(error);
    }
  );
  return ai;
};
