


  
import App from './app.js'
import DB from './database.js'

App.listen(App.get('puerto'),()=>console.log("Servidor en línea " + App.get('puerto')) );