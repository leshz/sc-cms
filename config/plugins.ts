export default ({ env }) => {
  return {
    "mercado-pago": {
      enabled: true,
      resolve: "./src/plugins/mercado-pago",
    },
    upload: {
      config: {
        provider:
          "@strapi-community/strapi-provider-upload-google-cloud-storage",
        providerOptions: {
          bucketName: process.env.BUCKET_NAME,
          publicFiles: env.bool("BUCKET_PUBLIC_FILES", true),
          uniform: env.bool("BUCKET_UNIFORM", true),
          basePath: "",
        },
      },
    },
  };
};
