import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';

export interface ResponseData {
  code: number;
  data?: any;
  msg: string;
}

const apiBaseUrl = process.env.NODE_ENV === 'production'
  ? 'http://localhost:8091'
  : 'http://localhost:8091';

class HttpRequest {
  constructor(public baseUrl: string = apiBaseUrl) {
    this.baseUrl = baseUrl;
  }

  public request (options: AxiosRequestConfig): AxiosPromise { 
    const instance: AxiosInstance = axios.create();
    options = this.mergeConfig(options);
    this.interceptors(instance, options.url);
    return instance(options);
  }

  private interceptors (instance: AxiosInstance, url?: string) {
    // 请求拦截
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      config.headers['Token'] = '123456';
      config.headers['Platform'] = 'h5/1.2.3';
      return config;
    }, error => Promise.reject(error));

    // 响应拦截
    instance.interceptors.response.use((res: AxiosResponse) => {
      const { data } = res;
      const { code, msg } = data;
      if (code !== 0) {
        console.error(msg);
      }
      return res.data;
    }, error => Promise.reject(error));
  }

  private mergeConfig (options: AxiosRequestConfig): AxiosRequestConfig {
    return Object.assign({ baseURL: this.baseUrl }, options);
  }
}

export default HttpRequest;
