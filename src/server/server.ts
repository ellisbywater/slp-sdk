import App from './app'
import TokenController from '../controllers/TokenController'

const app = new App({
    port: 5000,
    controllers: [
        new TokenController()
    ],
    middleWares: [
        
    ]
})

app.listen()