declare var SystemJS: any;
SystemJS.config({
    map: {
        "jquery": "./node_modules/jquery/dist/jquery.min.js"
    },
    packages: {
        "./": {
            defaultExtension: "js"
        }
    }
});
