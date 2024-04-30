# Prova Tècnica Parlem - Front-End Vue.js
> per Pol Fernàndez Guerra (29/04/2024 ~ 30/04/2024)

S'ha creat el projecte utilitzant Vue amb [Vuetify 3](https://vuetifyjs.com)

## ✨ Procés

El framework utilitzat ha inicialitzat el projecte amb components predefinits **src/components/AppFooter.vue _(personalitzat)_** i **~~src/components/HelloWorld.vue~~ _(eliminat)_**.

Per aquesta prova s'ha creat la view **src/views/ClientProducts.vue** i els components següents:
- **ProductList.vue**: per visualitzar qualsevol llistat de productes
- **TooltipIcon**: per disposar d'icones amb text flotant en posar el cursor per sobre

S'ha utilitzat [Vuex](https://vuex.vuejs.org/) per fer una petita store per centralitzar la gestió del estat de les dades d'aquesta prova, i [axios](https://v2.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html?redirect=true) per les apis web. S'han creat els els fitxers **store.js** i **httpConfiguration.js** respectivament al directori base del projecte i s'han configurat per ser globalment accessibles a **main.js**.

Per la base de dades s'ha utilitzat [json-server](https://www.npmjs.com/package/json-server) com recomenat i configurat al port 3001.
Les dades proporcionades están a **db.json**.
S'ha afegit un petit indicador de l'estat del servidor al centre del peu de página.

A les dades proveïdes inicialment s'han afegit dos clients més amb dades aleatóries per poder probar les funcionalitats de filtrat del llistat.
