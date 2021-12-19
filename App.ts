const express = require('express');
const bodyParser = require('body-parser');

import { Routes } from './routes/post.routes';

export class App {

    private express;
    private router:Routes;

    constructor() {
        this.router = new Routes();
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Config Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json({limit: "50mb"}));
        this.express.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
        this.express.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Init Routes.
    private routes(): void {
        this.router.init(express);
        this.express.use('/api/', this.router.getRoutes());
    }

    public getExpress: () => any = () => {
        return this.express;
    }
}
