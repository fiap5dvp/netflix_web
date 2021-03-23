import api from "../api";

class UserService {
  async addSeeFuture(movieId) {
    await api.request({
      url: `${process.env.USER_SERVICE_URL}/api/futures/${movieId}`,
      method: "POST",
    });
  }

  async removeSeeFuture(movieId) {
    await api.request({
      url: `${process.env.USER_SERVICE_URL}/api/futures/${movieId}`,
      method: "DELETE",
    });
  }

  async like(movieId) {
    await api.request({
      url: `${process.env.USER_SERVICE_URL}/api/likes/${movieId}`,
      method: "POST",
    });
  }

  async unlike(movieId) {
    await api.request({
      url: `${process.env.USER_SERVICE_URL}/api/likes/${movieId}`,
      method: "DELETE",
    });
  }
}

export default new UserService();
