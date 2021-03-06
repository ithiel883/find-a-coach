import { createApp } from 'vue';

import router from './router.js'
import store from './store/index'
import App from './App.vue'
import BaseCard from './Components/ui/BaseCard';
import BaseButton from './Components/ui/BaseButton';
import BaseBadge from './Components/ui/BaseBadge';
import BaseSpinner from './Components/ui/BaseSpinner'
import BaseDialog from './Components/ui/BaseDialog'


const app = createApp(App)



app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)


app.use(router)
app.use(store)

app.mount('#app');
