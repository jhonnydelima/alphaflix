import config from '../config';

const URL_CATEGORIES = `${config.URL}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();

        return response;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
