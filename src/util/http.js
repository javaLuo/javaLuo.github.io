import axios from "axios";
import { client_id, client_secret } from "../config";
/**
 *
 * @param url 请求路径
 * @param params 请求参数
 * @param method 请求方式
 * @param type 是否不加responseType(.md文件请求需要设置为true,否则解析不了)
 * @param no 是否不添加client_id这些，一言API不需要
 * @returns {AxiosPromise}
 */
const server = function (
  url,
  params = null,
  method = "GET",
  type = false,
  no = false
) {
  const req = {
    url: `${url}${
      no ? "" : `?client_id=${client_id}&client_secret=${client_secret}`
    }`,
    method,
    data: params,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // Authorization: `token ${gitToken}`
    },
    responseType: "json",
  };
  if (type) {
    delete req.responseType;
  }
  return axios(req);
};
export default server;
