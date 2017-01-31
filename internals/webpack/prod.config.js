module.exports = [
    require("./make")({
        separateStylesheet: true,
        minimize: true,
        devtool: "source-map"
    })
];
