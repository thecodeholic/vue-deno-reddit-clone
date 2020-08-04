import {
  Application,
} from "./deps.ts";
import router from "./router.ts";
import "./database.ts";
import dbClient from "./database.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${hostname ??
      "localhost"}:${port}`,
  );
});

await app.listen({ port: 8080 });
