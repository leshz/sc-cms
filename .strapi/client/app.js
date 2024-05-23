/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import i18N from "@strapi/plugin-i18n/strapi-admin";
import seo from "@strapi/plugin-seo/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import strapiAdvancedUuid from "strapi-advanced-uuid/strapi-admin";
import contentTags from "strapi-plugin-content-tags/strapi-admin";
import duplicateButton from "strapi-plugin-duplicate-button/strapi-admin";
import menus from "strapi-plugin-menus/strapi-admin";
import vercelDeploy from "strapi-plugin-vercel-deploy/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    i18n: i18N,
    seo: seo,
    "users-permissions": usersPermissions,
    "strapi-advanced-uuid": strapiAdvancedUuid,
    "content-tags": contentTags,
    "duplicate-button": duplicateButton,
    menus: menus,
    "vercel-deploy": vercelDeploy,
  },
});