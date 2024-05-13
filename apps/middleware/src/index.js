"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = require("@vue-storefront/middleware");
const middleware_config_1 = require("../middleware.config");
const consola = require('consola');
const cors = require('cors');
(async () => {
    const app = await (0, middleware_1.createServer)({ integrations: middleware_config_1.integrations });
    // By default it's running on the localhost.
    const host = process.argv[2] ?? 'localhost';
    // By default it's running on the port 8181.
    const port = process.argv[3] ?? 8181;
    const CORS_MIDDLEWARE_NAME = 'corsMiddleware';
    const corsMiddleware = app._router.stack.find((middleware) => middleware.name === CORS_MIDDLEWARE_NAME);
    // You can overwrite the cors settings by defining allowed origins.
    corsMiddleware.handle = cors({
        origin: ['http://localhost:3000'],
        credentials: true,
    });
    app.listen(port, host, () => {
        consola.success(`API server listening on http://${host}:${port}`);
    });
})();
