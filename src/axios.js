import { useEffect, useState } from "react";
import instance from './request';

const AxiosInterceptor = ({ children }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      request => {
        // Modify request here (adding/changing headers, body...)
        return request;
      },
      error => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = instance.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        // Handle error here
        return Promise.reject(error);
      }
    );

    setIsComplete(true);

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return isComplete && children;
};

export { AxiosInterceptor };
