/**
 * derecho-de-retracto router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::derecho-de-retracto.derecho-de-retracto",
  {
    config: {
      find: {
        middlewares: ["api::derecho-de-retracto.populating"],
      },
    },
  }
);
