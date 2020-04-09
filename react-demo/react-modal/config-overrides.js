const { override, fixBabelImports } = require('customize-cra');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function addBabelPollyfill() {
    return (config) => {
        config.entry.unshift('babel-polyfill');
        // config.plugins.push(new BundleAnalyzerPlugin())
        return config;
    }
}

module.exports = override(
    addBabelPollyfill(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
 );
