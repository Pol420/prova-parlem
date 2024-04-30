<template>
  <v-tooltip :text="text">
    <template v-slot:activator="{ props }">
      <v-icon
        v-bind="props"
        :icon="icon"
        :size="size"
        :color="color"
        :end="end"
        :start="start"
      />
    </template>
  </v-tooltip>
</template>

<script>
  /*
    Icona personalitzable que mostra un missatge en posar el ratolí asobre
  */
  export default {
    props: {
      text: { type: String, required: true },
      /*
        els atributs de la icona no es poden heretar, configurades com a props
        (https://vuetifyjs.com/en/api/v-icon/#props)
      */
      size: { type: String, default: 'small' },
      color: { type: String, default: 'disabled' },
      icon: { type: String, default: '$help' },
      end: { type: Boolean, default: false },
      start: { type: Boolean, default: false }
    },
    data: () => ({}),
  }
</script>
