<template>
  <v-app>
    <v-main>
      <!-- router-view si s'utilitza vue-router (https://router.vuejs.org/) -->
      <ClientProducts />
    </v-main>
    <!-- Component predefinit de Vuetify v3, personalitzat per la prova -->
    <AppFooter />
  </v-app>
</template>

<script>
  import ClientProducts from '@/views/ClientProducts.vue'

	export default {
		components: { ClientProducts }
  }
</script>
