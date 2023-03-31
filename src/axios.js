import { useEffect } from "react";
import instance from './request';

const AxiosInterceptor = ({ children }) => {
  useEffect(() => {
    const resInterceptor = (response) => {
      console.log("response", response);
      return response;
    };

    const errInterceptor = (error) => {
      console.log("error", error);
      if (error.response.status === 401) {
        //redirect logic here
      }

      return Promise.reject();
    };

    const interceptor = instance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => instance.interceptors.response.eject(interceptor);
  }, []);

  return children;
};

export { AxiosInterceptor };
