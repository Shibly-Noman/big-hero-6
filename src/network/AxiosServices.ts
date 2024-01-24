import axios from "axios";

function getIRequestProp(isMultipartData: boolean) {
  let serverUrl = `${process.env.REACT_APP_API_URL}`;
    return {
      serverUrl: serverUrl,
      requestHeader: {
        "Content-Type": isMultipartData
          ? "multipart/form-data"
          : "application/json",
      },
  }
}

async function get(url: string, parameter: any) {
  let isMultipartData: boolean = false;
  let { serverUrl, requestHeader } = getIRequestProp(isMultipartData);
  return axios.get(serverUrl + url, {
    params: parameter,
    headers: requestHeader,
  });
}

async function post(url: string, body: any) {
  let isMultipartData: boolean = false;
  let { serverUrl, requestHeader } = getIRequestProp(isMultipartData);
  return await axios.post(serverUrl + url, body, {
    headers: requestHeader,
  });
}

async function postMultipartData(url: string, body: any) {
  let isMultipartData: boolean = true;
  let { serverUrl, requestHeader } = getIRequestProp(isMultipartData);
  return await axios.post(serverUrl + url, body, {
    headers: requestHeader,
  });
}

async function refreshPostMultipart(url: string, body: FormData) {
  let serverUrl = `${process.env.REACT_APP_API_URL}`;
  const auth: string = btoa(
    `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`
  );

  const requestHeader = {
    "Content-Type": "multipart/form-data",
    Authorization: `Basic ${auth}`,
  };
  return await axios.post(serverUrl + url, body, {
    headers: requestHeader,
  });
}

async function putMultipartData(url: string, body: any) {
  let isMultipartData: boolean = true;
  let { serverUrl, requestHeader } = getIRequestProp(isMultipartData);
  return await axios.put(serverUrl + url, body, {
    headers: requestHeader,
  });
}

async function put(url: string, body: any) {
  let isMultipartData: boolean = false;
  let { serverUrl, requestHeader } = getIRequestProp(isMultipartData);
  return await axios.put(serverUrl + url, body, {
    headers: requestHeader,
  });
}

async function patch(url: string, body: any) {
  let isMultipartData: boolean = false;
  let { serverUrl, requestHeader } = getIRequestProp(isMultipartData);
  return await axios.patch(serverUrl + url, body, {
    headers: requestHeader,
  });
}

async function remove(url: string, body: any) {
  let isMultipartData: boolean = false;
  let { serverUrl, requestHeader } = getIRequestProp(isMultipartData);
  return await axios.delete(serverUrl + url, {
    data: body,
    headers: requestHeader,
  });
}

export const AxiosServices = {
  get,
  post,
  put,
  patch,
  remove,
  postMultipartData,
  putMultipartData,
  refreshPostMultipart,
};
