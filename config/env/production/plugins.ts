export default ({ env }) => {
  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env("AWS_ACCESS_KEY_ID"),
              secretAccessKey: env("AWS_ACCESS_SECRET"),
            },
            region: env("AWS_REGION"),
            params: {
              ACL: env("AWS_ACL", "public-read"),
              signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
              Bucket: env("AWS_BUCKET"),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    "duplicate-button": true,
    transformer: {
      enabled: true,
      config: {
        headers: ["Strapi-Transformer-Ignore"],
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
        plugins: {
          ids: {
            "strapi-ecommerce-mercadopago": true,
            menus: true,
          },
        },
      },
    },
    "strapi-ecommerce-mercadopago": {
      enabled: true,
      resolve: "./src/plugins/strapi-ecommerce-mercadopago",
    },
    menus: {
      config: {
        maxDepth: 3,
      },
    },
    seo: {
      enabled: true,
    },
    "vercel-deploy": {
      enabled: env.bool("VERCEL_PLUGIN_ENABLED", false),
      config: {
        deployHook: env("VERCEL_DEPLOY_PLUGIN_HOOK", ""),
        apiToken: env("VERCEL_DEPLOY_PLUGIN_API_TOKEN", ""),
        appFilter: env("VERCEL_DEPLOY_PLUGIN_APP_FILTER", ""),
        teamFilter: "",
        roles: ["strapi-super-admin", "strapi-editor"],
      },
    },
    email: {
      config: {
        provider: "strapi-provider-email-resend",
        providerOptions: {
          apiKey: env("RESEND_API_KEY", ""),
        },
        settings: {
          defaultFrom: env("RESEND_DEFAULT_FROM", ""),
          defaultReplyTo: env("RESEND_DEFAULT_REPLY_TO", ""),
        },
      },
    },
  };
};
