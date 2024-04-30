<template>
  <v-footer height="40" app>
    <i class="text-caption text-disabled">
      29/04/2024 ~ 30/04/2024
    </i>
    <v-spacer/>
    <v-chip :prepend-icon="'$'+statusName" :color="statusColor">
      {{ statusName }} ({{ status }})
    </v-chip>
    <v-spacer/>
    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      <span class="d-none d-sm-inline-block">Pol Fernández Guerra</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://www.linkedin.com/in/pol-fernandez-guerra"
        rel="noopener noreferrer"
        target="_blank"
      >
        <v-icon icon="$linkedin"/>
        LinkedIn
      </a>
    </div>
  </v-footer>
</template>

<script>
  /*
    Peu de pàgina per la app.
    Personalitzat per la prova técnica.
  */
  import { store } from '@/store.js'

	export default {
		data: () => ({}),
		computed: {
      /*
        Funcions creades ràpidament per debugar l'estat del servidor.
        Idealment es crearia una funció a la store i s'afegiria els alies
        per cada status als colors i icones de la configuració de vuetify (src/plugins/vuetify.js)
      */
      // status of the latest request
      status () { return store.serverStatus },
      statusName () {
        if (this.status < 200) return 'info'
        else if (this.status < 300) return 'success'
        else if (this.status < 500) return 'clientError'
        else if (this.status < 600) return 'serverError'
        else return 'help'
      },
      statusColor () {
        if (this.status < 200) return 'blue'
        else if (this.status < 300) return 'success'
        else if (this.status < 500) return 'error'
        else if (this.status < 600) return 'error'
        else return 'warning'
      }
    }
  }
</script>
