# Prova Tècnica Parlem - Front-End Vue.js
> per Pol Fernàndez Guerra (29/04/2024 ~ 30/04/2024)

S'ha creat el projecte utilitzant Vue amb [Vuetify 3](https://vuetifyjs.com)

## ✨ Procés

El framework utilitzat ha inicialitzat el projecte amb components predefinits _src/components/AppFooter.vue (personalitzat)_ i _~~src/components/HelloWorld.vue~~ (eliminat)_**.

Per aquesta prova s'ha creat la view **src/views/ClientProducts.vue** i els components següents:
- **ProductList.vue**: per visualitzar qualsevol llistat de productes
- **TooltipIcon**: per disposar d'icones amb text flotant en posar el cursor per sobre

S'ha utilitzat [Vuex](https://vuex.vuejs.org/) per fer una petita store per centralitzar la gestió de l'estat de les dades d'aquesta prova, i [axios](https://v2.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html?redirect=true) per les APIs web. S'han creat els fitxers **store.js** i **httpConfiguration.js** respectivament al directori base del projecte i s'han configurat per ser globalment accessibles a **main.js**.

Per simular la base de dades s'ha utilitzat [my-json-server](https://my-json-server.typicode.com/) que crea APIs REST falses a partir d'un fitxer _db.json_ a un [repositori de GitHub](https://github.com/Pol420/MyJsonTests/blob/main/db.json).

S'ha afegit un petit indicador de l'estat del servidor al centre del peu de pàgina.

A les dades proveïdes inicialment s'han afegit dos clients més amb dades aleatòries per poder provar les funcionalitats de filtratge del llistat.

## 💿 Desplegament Al Servidor

> accedeix a la prova en aquesta url:
**[vite-prova-parlem.vercel.app](vite-prova-parlem.vercel.app)**
