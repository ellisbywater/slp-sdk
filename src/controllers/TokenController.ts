import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'

class TokenController implements IControllerBase {
    public path = "/token"
    public router = express.Router()
    
    constructor() {
        this.initRoutes()
    }
    initRoutes() {
        this.router.get('/id', this.index)
    }
    index = (req: Request, res: Response) => {
        const token = {
            id: 1,
            name: "cornerbloq",
        }
        res.send("token : " + token.id + ", " + token.name)
    }
}

export default TokenController
