/**
 * `populating` middleware
 */

import { Strapi } from "@strapi/strapi";
import { fieldsImage, seo } from "../../../helpers/constants";

export default (config, { strapi }: { strapi: Strapi }) => {
  return async (ctx, next) => {
    ctx.query.populate = {
      top: {
        fields: ["phone", "title", "social_links"],
        populate: {
          social_links: {
            fields: ["link", "icon", "text"],
          },
        },
      },
      menu: {
        fields: ["logo", "cart_menu", "mobile"],
        populate: {
          logo: {
            fields: fieldsImage,
          },
          mobile: {
            fields: ["*"],
          },
          cart_menu: {
            fields: ["*"],
          },
        },
      },
      footer: {
        fields: ["columns", "botton", "news_letter"],
        populate: {
          columns: {
            fields: ["title", "column"],
          },
          botton: {
            fields: ["copyright", "phone"],
          },
          news_letter: {
            fields: ["title", "label"],
          },
        },
      },
      seo: seo,
      ...ctx.query.populate,
    };
    await next();
  };
};
