import { Server } from './server';

const port = process.env.PORT || 3000;

const app = new Server();

app.listen(port)
  .then(() => console.log(`GraphQL server listen in http://localhost:${port}/graphiql`))
  .catch((e) => console.log(e));
