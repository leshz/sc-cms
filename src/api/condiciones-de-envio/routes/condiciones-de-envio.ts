/**
 * condiciones-de-envio router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::condiciones-de-envio.condiciones-de-envio",
  {
    config: {
      find: {
        middlewares: ["api::condiciones-de-envio.populating"],
      },
    },
  }
);
