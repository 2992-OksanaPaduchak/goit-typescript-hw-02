import axios from "axios";



const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    common: {
      "Accept-Version": "v1",
      Authorization: "Client-ID uxXvKEyCGDtzRVbWuVA60L_o26bEv0Jr_EtjQ00xt6w",
    },
  },
});

export const getPhotos = async <T>(query: string, page: number): Promise<T> => {
  const response = await instance.get<T>(`/search/photos`, {
    params: {
      page,
      per_page: 10,
      query,
    },
  });
  return response.data;
};
