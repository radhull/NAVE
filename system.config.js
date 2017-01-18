SystemJS.config({
    bundles: {
        "./bundles/vendor-bundle": ["./app/vendor.js", "jquery"],
        "./bundles/tareas-bundle": ["./app/main.js"]
    },
    map: {
        "jquery": "./node_modules/jquery/dist/jquery.min.js",
        "css": "./node_modules/systemjs-plugin-css/css.js",
        "bootstrap": "./node_modules/bootstrap/dist"
    },
    meta: {
        "*.css": { loader: "css" }
    },
    packages: {
        "./": {
            defaultExtension: "js"
        },
        "app": {
            defaultExtension: "js",
            main: "main"
        },
        "bootstrap": { "main": "js/bootstrap.min.js" }
    }
});
//# sourceMappingURL=system.config.js.map