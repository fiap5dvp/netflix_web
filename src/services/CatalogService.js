import api from "../api";

class CatalogService {
  async listByTags(tag, kind) {
    const kindType = kind === "start" ? "" : kind;
    const response = await api.request({
      url: `${process.env.CATALOG_SERVICE_URL}/api/tags/${tag}?kind=${kindType}`,
    });

    return response;
  }

  async listMostViews(kind) {
    const response = await api.request({
      url: `${process.env.CATALOG_SERVICE_URL}/api/mostviews/${kind}`,
    });

    return response;
  }

  async listMyList() {
    const response = await api.request({
      url: `${process.env.USER_SERVICE_URL}/api/futures`,
    });

    return response;
  }

  async getDetail(movieId, tag) {
    const response = await api.request({
      url: `${process.env.CATALOG_SERVICE_URL}/api/movies/${movieId}`,
    });

    return response;
  }

  async viewed(movieId, tag) {
    await api.request({
      url: `${process.env.CATALOG_SERVICE_URL}/api/movies/${movieId}/viewed`,
      method: "POST",
    });
  }

  async addMyList(movieId) {
    await api.request({
      url: `${process.env.CATALOG_SERVICE_URL}/api/movies/${movieId}/viewed`,
      method: "POST",
    });
  }

  async searchMovie(filter) {
    return api.request({
      url: `${process.env.CATALOG_SERVICE_URL}/api/movies?filter=${filter}`,
    });
  }
}

export default new CatalogService();
