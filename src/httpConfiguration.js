import axios from 'axios'

/*
  hardcodejada la url aquí, però idealment s'utilitzaria una
  variable d'entorn com "import.meta.env.VITE_SERVER_BASE_URL"
*/
export const baseURL = 'http://127.0.0.1:3001/'

export const http = { // funcions http incloses globalment a la app a src/main.js
  async get(url, config = {}) {
    // si la url ja inclou '/' al final no cal incloure-ho aquí
    return await axios.get(baseURL + url, config)
  },
    /*
      no cal definir POST per aquesta prova, però seria quelcom com:

        async post(url, data, config = {}) {
            return await axios.post(baseURL + url, data, config)
        },

      configurant les capçaleres pertinents si s'inclouen dades al cos
      de la petició (fitxers, json...)
    */
}
