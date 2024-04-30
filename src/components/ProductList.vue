<template>
  <!-- Llistat de productes -->
  <v-list lines="two" class="align-center justify-center">
    <v-list-subheader inset>Productes Contractats</v-list-subheader>
    <v-list-item
      v-for="product in products"
      :value="product"
      :title="product.productName"
      :subtitle="product.soldAt"
      rounded="xl"
    >
      <!-- Icona del tipus -->
      <template v-slot:prepend>
        <v-avatar color="secondary">
          <TooltipIcon :icon="'$'+product.productTypeName" :text="product.productTypeName" color="white"/>
        </v-avatar>
      </template>
      <!-- Botó i menú d'informació -->
      <template v-slot:append>
        <v-btn color="grey-lighten-1" icon="$info" variant="text"/>
        <!--
          Menú Popover amb informació
          (https://vuetifyjs.com/en/components/menus/#popover-menu)
        -->
        <v-menu activator="parent" :closeOnContentClick="false" :openOnHover="true" location="end">
          <v-card rounded="shaped">
            <v-card-title>
              <v-icon :icon="'$'+product.productTypeName"/>
              {{ product.productName }}
            </v-card-title>
            <v-card-subtitle class="text-overline">
              id: {{ product._id }}
            </v-card-subtitle>
            <v-card-text>
              <p>
                <b>Velocitat (mb)</b>: {{ product.mbSpeed || '-' }}
              </p>
              <p>
                <b>Data (gb)</b>: {{ product.gbData || '-' }}
              </p>
              <v-divider class="mx-8 my-2"/>
              <i class="text-medium-emphasis">
                Núm. {{ product.numeracioTerminal || '-' }}
              </i>
            </v-card-text>
          </v-card>
        </v-menu>
      </template>
    </v-list-item>
  </v-list>
</template>

<script>
  /*
    View amb un llistat de productes
  */
  import TooltipIcon from '@/components/TooltipIcon'

	export default {
		components: { TooltipIcon },
    props: {
      products: { type: Array, required: true }
    },
		data: () => ({
    }),
		computed: {},
		methods: {}
  }
</script>
