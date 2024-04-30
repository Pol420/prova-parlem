import { reactive } from 'vue'

/*
  S'utilitzen dades reactives utilitzant la API publica de Vue tant per l'estat i accions/mutacions.
  (https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api)
*/
export const store = reactive({
  // estat
  clients: [],
  products: [],
  serverStatus: 'unknown',
  // accions
  getClientProducts (client) {
    /*
      retorna tots els productes de la store relacionats amb el client amb 'customerId'
    */
    if (this.products == null) return []
    else if (client.customerId) return this.products.filter((product) => {
      return product.customerId === client.customerId
    })
    else return []
  },
  // web APIs (alias 'http' configurat a src/main.js)
  async fetchClients () {
    const request = await this.http.get('clients')
    this.serverStatus = request.status
    this.clients = request.data
    return this.clients
  },
  async fetchProducts () {
    const request = await this.http.get('products')
    this.products = request.data
    return this.products
  }
})
