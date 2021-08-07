const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.base.config.js');

module.exports = ({env}) => {
    const envConfig = require(`./webpack.${env}-env.config.js`);
    return merge(commonConfig, envConfig);
};
