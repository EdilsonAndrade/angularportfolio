module.exports = function () {
    var client = "./app/assets/";
    var nodeModulesRootFolder = "node_modules/**/";
    var bootstrapRootFolder = "node_modules/bootstrap/**/";
    var config = {
        css: client + "css",
        less: client + "less/*.less",
        dirName: client,
        folders: [
            "app/**/**.js",
            "app/**/**.css",
            "app/**/**.html",
            "app/**/**.svg",
            "app/**/**.ttf",
            "app/**/**.woff",
            "app/**/**.eot"
            
        ],
        folderImages: [
            "app/assets/images/**/*.jpg",
            "app/assets/images/**/*.png"
          

        ],
        folderImagesDest:[
            "./dist/app/assets/images/"
        ]
        ,
        foldersNodeModule: [
            nodeModulesRootFolder + "angular.min.js",
            nodeModulesRootFolder + "jquery.min.js",
            nodeModulesRootFolder + "angular-resource.min.js",
            nodeModulesRootFolder + "Google.min.js",


        ],
        bootstrapFolder: [
            bootstrapRootFolder + "/*.min.js",
            bootstrapRootFolder + "/css/**/*.min.css",
            bootstrapRootFolder + "/fonts/**/*",
        ],
        rootIndex: ["./*.html"],
        noJekyll: [".nojeyll"],
        deploy: ['./dist/**/*', './dist/.nojekyll']




    }

    return config;
}

