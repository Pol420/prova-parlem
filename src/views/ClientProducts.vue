<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto">
      <!--
        Taula de dades dels clients com a element central de la view
        (https://vuetifyjs.com/en/api/v-data-table/)
      -->
      <v-data-table
        :items="store.clients"
        :headers="headers"
        :search="search"
        :loading="loading"
        :expanded.sync="expanded"
        item-value="_id"
        multi-sort
        expand-on-click
        show-expand
      >
        <!-- Títol i Barra de filtre (cerca) -->
        <template v-slot:top="{}">
          <v-toolbar floating>
            <v-row no-gutters align="center" justify="space-between" class="mx-8">
              <!-- Títol -->
              <p class="text-h4 text-high-emphasis">Llistat de Clients ({{ store.clients.length }})</p>
              <!--
                Camp de cerca (text) per qualsevol propietat dels clients dle llistat.

                Per tal de fer la cerca més avançada, com cercar per propietats dels productes,
                es pot fer amb una funció com a custom filter (https://vuetifyjs.com/en/api/v-data-table/)
              -->
              <v-text-field
                v-model="search"
                variant="solo-filled"
                label="Cercar"
                hide-details clearable
                rounded="xl"
                append-inner-icon="$search"
                style="max-width: 200px"
                density="comfortable"
              />
            </v-row>
          </v-toolbar>
        </template>
        <!--
          Detalls del Client Ampliats (products)
          (https://vuetifyjs.com/en/components/data-tables/basics/#expandable-rows)
        -->
        <template v-slot:expanded-row="{ columns, item }">
          <tr>
            <td :colspan="columns.length">
              <p v-if="clientProducts(item).length === 0" class="text-center text-disabled">Cap producte contractat per aquest client.</p>
              <v-row no-gutters justify="center" v-else>
                <ProductList :products="clientProducts(item)"/>
              </v-row>
            </td>
          </tr>
        </template>
        <!--
          Slots personalitzats de la taula
          (https://vuetifyjs.com/en/api/v-data-table/#slots)
        -->
        <!-- Avatar (imatge) -->
        <template v-slot:item.avatar="{ value }">
          <v-avatar :image="value"/>
        </template>
        <!-- Document (amb 'tooltip' pel tipus) -->
        <template v-slot:item.docNum="{ item, value }">
          <TooltipIcon :text="item.docType"/>
          {{ value }}
        </template>
        <!-- Direcció Email (amb acció "enviar") -->
        <template v-slot:item.email="{ value }">
          <a class="text-primary">{{ value }}</a>
          <!-- div amb acció falsa d'enviar correu -->
          <span @click.stop="sendEmail(value)">
            <TooltipIcon
              icon="$sendEmail"
              color="primary"
              text="Enviar Correu"
              end
            />
          </span>
        </template>
        <!-- Número de Teléfon (amb acció "trucar") -->
        <template v-slot:item.phone="{ value }">
          <a class="text-primary">{{ value }}</a>
          <!-- div amb acció falsa de trucar -->
          <span @click.stop="callPhone(value)">
            <TooltipIcon
              icon="$callPhone"
              color="primary"
              text="Trucar"
              end
            />
          </span>
        </template>
        <!-- Quantitat de Productes del Client -->
        <template v-slot:item.products="{ item }">
          {{ clientProducts(item).length }}
        </template>
      </v-data-table>
    </v-responsive>
  </v-container>
</template>

<script>
  /*
    View amb una taula mostrant les dades dels clients.
  */
  import { store } from '@/store.js'
  import TooltipIcon from '@/components/TooltipIcon'
  import ProductList from '@/components/ProductList'

	export default {
		components: { TooltipIcon, ProductList },
		data: () => ({
      store,
      headers: [
        { title: '', key: 'avatar', align: 'end', sortable: false },
        { title: 'Nom', key: 'givenName', align: 'end' },
        { title: 'Cognom', key: 'familyName1', align: 'start' },
        { title: 'Número de Document', key: 'docNum', align: 'center' },
        { title: 'Adreça de Correu', key: 'email', align: 'center', sortable: false },
        { title: 'Teléfon', key: 'phone', align: 'center', sortable: false },
        // 'products' requereix una funció de filtratge personalitzat, sortable: false per ara
        { title: 'Núm. Productes', key: 'products', align: 'center', sortable: false },
      ],
      search: null,
      loading: false,
      expanded: []
		}),
		computed: {
      /*
        es podria definir les propietats de la store que a utilitzar ('clients' i 'products')
        però aquestes ja són reactives i s'obtenen directament de la store
      */
    },
		methods: {
      async fetchData() {
        /*
          carrega les dades del servidor pertinets a aquesta view a la store
        */
        this.loading = true
        await store.fetchClients()
        await store.fetchProducts()
        this.loading = false
      },
      clientProducts(client) {
        /*
          torna un llistat de productes relacionats amb el customerId del client,
          si existeixen a la store
        */
        if (client.customerId) return store.getClientProducts(client)
        else return []
      },
      callPhone (number) {
        /*
          Simulació d'acció de trucar, no fa res.
        */
        window.alert('Trucant ' + number + '...')
      },
      sendEmail (email) {
        /*
          Simulació d'acció d'enviar correu, no fa res.
        */
        window.alert('Dirigint a la safata de sortida cap a ' + email + '...')
      }
    },
    created () {
      /*
        En crear el component es carreguen els clients i productes a la store.

        En cas de tenir posibles mutacions al servidor, caldria crear un interval
        per carregar periódicament les dades
      */
      this.fetchData()
    }
  }
</script>
