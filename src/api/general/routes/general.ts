/**
 * general router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::general.general", {
  config: {
    find: {
      middlewares: ["api::general.populating"],
    },
  },
});
