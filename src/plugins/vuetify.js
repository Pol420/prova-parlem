
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
// importa icones mdi amb alguns aliases predefinits
import { aliases } from 'vuetify/iconsets/mdi-svg'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark', // predeterminat, però estaria bé poder-ho canviar (https://vuetifyjs.com/en/api/use-theme/)
  },
  icons: {
    defaultSet: 'mdi',
    // definir aliases personalitzats (utilitzant https://pictogrammers.com/library/mdi/)
    aliases: {
      callPhone: 'mdi-phone-forward',
      sendEmail: 'mdi-email-arrow-right',
      help: 'mdi-help-circle',
      linkedin: 'mdi-linkedin', // deprecated!!
      clientError: 'mdi-account-alert',
      serverError: 'mdi-cloud-alert',
      search: 'mdi-magnify',
      // product type icons
      '4G': 'mdi-signal-4g',
      '5G': 'mdi-signal-5g',
      'ftth': 'mdi-home-assistant',
    }
  }
})
