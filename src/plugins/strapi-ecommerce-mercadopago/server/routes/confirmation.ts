import { METHODS, URLS } from "../../constants";

export default {
  type: "content-api",
  routes: [
    {
      method: METHODS.GET,
      path: URLS.IPN,
      handler: "confirmation.confirmation",
      config: {
        middlewares: ["plugin::strapi-ecommerce-mercadopago.loadConfig"],
      },
    },
  ],
};