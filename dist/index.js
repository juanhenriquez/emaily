"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const port = process.env.PORT || 3000;
const app = new server_1.Server();
app.listen(port)
    .then(() => console.log(`GraphQL server listen in http://localhost:${port}/graphiql`))
    .catch((e) => console.log(e));
//# sourceMappingURL=index.js.map