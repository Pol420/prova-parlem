import axios from 'axios'

/*
  es configura la URL del servidor amb una variable d'entorn
  definida al fitxer .env (o la corresponent configuració al host en producció)
*/
export const baseURL = import.meta.env.VITE_SERVER_URL

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
