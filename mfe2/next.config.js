const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });
    config.plugins.push(
      new NextFederationPlugin({
        name: "mfe2",
        filename: "static/remoteEntry.js",
        remotes: {
          mfe1: `mfe1@http://localhost:3001/_next/static/${
            options.isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
      })
    );
    return config;
  },
};

module.exports = nextConfig;
