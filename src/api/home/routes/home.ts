/**
 * home router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::home.home", {
  config: {
    find: {
      middlewares: ["api::home.populating"],
    },
  },
});
