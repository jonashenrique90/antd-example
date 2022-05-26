/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  lessVarsFilePath: "./styles/antd.less",
  webpack(config) {
    return config;
  },
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
