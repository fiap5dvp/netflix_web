import axios from "axios";

class ApiService {
  async request({
    url,
    method = "GET",
    timeout = 6000,
    headers = {},
    data,
    ...rest
  }) {
    const requestParams = {
      method,
      url,
      data,
      timeout,
      headers: {
        ...headers,
      },
      ...rest,
    };

    const token = localStorage.getItem("ntk");

    if (token) requestParams.headers.authorization = `Bearer ${token}`;

    const response = await axios(requestParams);

    return response.data;
  }
}

export default new ApiService();
