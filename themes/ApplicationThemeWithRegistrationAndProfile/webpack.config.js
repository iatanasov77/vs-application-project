const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath( 'public/shared_assets/build/application-theme-1/' )
    .setPublicPath( '/build/application-theme-1/' )
  
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    
    .enableSassLoader(function(sassOptions) {}, {
        resolveUrlLoader: true
    })
    
    /**
     * Add Entries
     */
     .autoProvidejQuery()
     .configureFilenames({
        js: '[name].js?[contenthash]',
        css: '[name].css?[contenthash]',
        assets: '[name].[ext]?[hash:8]'
    })
    
    .copyFiles({
         from: './themes/ApplicationTheme_1/assets/images',
         to: 'images/[path][name].[ext]',
     })
    
    .addStyleEntry( 'css/login', './themes/ApplicationTheme_1/assets/css/login.scss' )
    .addEntry( 'js/login', './themes/ApplicationTheme_1/assets/js/pages/login.js' )
    
    .addStyleEntry( 'css/app', './themes/ApplicationTheme_1/assets/css/main.scss' )
    .addEntry( 'js/app', './themes/ApplicationTheme_1/assets/js/app.js' )
    .addEntry( 'js/authentication', './themes/ApplicationTheme_1/assets/js/pages/authentication.js' )
    
    .addEntry( 'js/home', './themes/ApplicationTheme_1/assets/js/pages/home.js' )
    
    .addEntry( 'js/profile', './themes/ApplicationTheme_1/assets/js/pages/profile.js' )
    .addEntry( 'js/filemanager-file-upload', './themes/ApplicationTheme_1/assets/js/pages/filemanager-file-upload.js' )
;

const config = Encore.getWebpackConfig();
config.name = 'applicationTheme_1';

module.exports = config;
