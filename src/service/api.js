import axios from "axios";

export const baseURL = "https://devapi.globalscientificgroup.org/api";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Add interceptor for Basic Auth
api.interceptors.request.use((config) => {
  const username = "hari";
  const password = "1";

  const token = btoa(`${username}:${password}`); // encode like Postman
  config.headers.Authorization = `Basic ${token}`;

  return config;
});

// const isTokenExpired = (token) => {
//   try {
//     const decoded = jwtDecode(token);
//     const now = Date.now() / 1000; // current time in seconds
//     return decoded.exp < now;
//   } catch (err) {
//     return true; // invalid or broken token = expired
//   }
// };

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       if (isTokenExpired(token)) {
//         // Token is expired — logout user
//         localStorage.removeItem("token");
//         localStorage.removeItem("userData");
//         localStorage.clear();

//         toast.error("Session expired. Please login again.");
//         window.location.href = "/login"; // force redirect
//         throw new axios.Cancel("Token expired");
//       }

//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("userData");
//       // toast.error("Unauthorized. Please login again.");
//       // window.location.href = "/login";
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
