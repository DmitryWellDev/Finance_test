module.exports = (api) => {
    const presets = ["react-app"];
    const plugins = [
        "@babel/plugin-transform-modules-commonjs",
        "inline-react-svg",
        ["@babel/plugin-proposal-private-methods", { "loose": true }]
    ];

    api.cache(false);

    return {
        presets,
        plugins
    };
};
