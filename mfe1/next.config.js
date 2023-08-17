const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
      webpack(config, options) {
        Object.assign(config.experiments, { topLevelAwait: true });
        config.plugins.push(
            new NextFederationPlugin({
               name: "mfe1",
                filename: "static/remoteEntry.js",
                exposes: {
                  './Test': './src/components/Test.js',
                },
            }),
        );
        return config;
    },

};

module.exports = nextConfig;
