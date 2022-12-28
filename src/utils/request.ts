import { Message } from '@arco-design/web-vue';
import axios from 'axios';

import type {
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
} from 'axios';

axios.defaults.timeout = 3 * 60 * 1000; // axios请求超时时间
// axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json'; // axios发送数 据时使用json格式

// request拦截器
axios.interceptors.request.use(
    (config) => {
        config.headers = {
            ...config.headers,
        };
        return config;
    },
    (error) => {
        Message.error(error);
        return Promise.reject(error);
    }
);

// response拦截器
axios.interceptors.response.use(
    (response) => {
        // 当响应码是 2xx 的情况, 进入这里
        if (response.data.code === '000') {
            return response.data;
        }
        Message.error(response.data?.message || response.statusText);
        // 业务码不对，抛出错误走 onError
        throw new Error(response.data);
    },
    (error) => {
        // 当响应码不是 2xx 的情况, 进入这里
        const response = error?.response;

        switch (response?.status) {
            case 401:
                break;
            case 403:
                break;
            default:
                break;
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const notShowErrMsgCode = response && [].includes(response?.status);
        const msg =
            response?.data?.message ||
            response?.data?.error ||
            response?.statusText ||
            'Network Error';
        if (!notShowErrMsgCode) {
            // 以防出现多个 error msg，出下一个的时候，销毁其他
            Message.clear();
            Message.error(msg);
        }
        return Promise.reject(error);
    }
);

/**
 * get 请求
 * @param url 请求的url地址
 * @param params 请求时携带的参数
 * @param headers 额外的head配置
 * @returns promise 实例
 */
export function get<T>(
    url: string,
    params?: AxiosRequestConfig['params'],
    headers?: AxiosRequestHeaders
): Promise<AxiosResponse<T>> {
    return axios
        .get<T>(url, { params, headers })
        .then((res: AxiosResponse<T>) => {
            return res;
        })
        .catch((error) => {
            throw new Error(error);
        });
}

/**
 * post 请求
 * @param url 请求的url地址
 * @param params 请求时携带的参数
 * @param headers 额外的head配置
 * @returns promise 实例
 */
export function post<T>(
    url: string,
    params?: AxiosRequestConfig['params'],
    headers?: AxiosRequestHeaders
): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, { headers })
            .then((res: AxiosResponse<T>) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * put 请求
 * @param url 请求的url地址
 * @param params 请求时携带的参数
 * @param headers 额外的head配置
 * @returns promise 实例
 */
export function put<T>(
    url: string,
    params?: AxiosRequestConfig['params'],
    headers?: AxiosRequestHeaders
): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
        axios
            .put(url, params, { headers })
            .then((res: AxiosResponse<T>) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * del 请求
 * @param url 请求的url地址
 * @param params 请求时携带的参数
 * @param headers 额外的head配置
 * @returns promise 实例
 */
export function del(
    url: string,
    params?: AxiosRequestConfig['params'],
    headers?: AxiosRequestHeaders
) {
    return new Promise((resolve, reject) => {
        axios
            .delete(url, { data: params, headers })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

// type ResponseWithData<T = any> = { data?: T; [key: string]: any };
// export type { ResponseWithData };

export default axios;
