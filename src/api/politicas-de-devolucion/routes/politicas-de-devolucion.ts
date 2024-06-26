/**
 * politicas-de-devolucion router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::politicas-de-devolucion.politicas-de-devolucion",
  {
    config: {
      find: {
        middlewares: ["api::politicas-de-devolucion.populating"],
      },
    },
  }
);
