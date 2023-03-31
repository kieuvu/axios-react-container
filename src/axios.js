import { useEffect, useState } from "react";
import instance from './request';

const AxiosInterceptor = ({ children }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interceptor = instance.interceptors.response.use(
      response => {
        console.log("response", response);
        return response;
      },
      error => {
        console.log("error", error);
        // handle error here
        return Promise.reject();
      }
    );

    setIsComplete(true);

    return () => instance.interceptors.response.eject(interceptor);
  }, []);

  return isComplete && children;
};

export { AxiosInterceptor };
