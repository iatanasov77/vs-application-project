var Encore = require( '@symfony/webpack-encore' );

Encore
    .setOutputPath( 'public/admin_panel/build/' )
    .setPublicPath( '/build/' )

	// FOS CkEditor
	.copyFiles([
		{from: './node_modules/bootstrap-sass/assets/fonts/bootstrap', to: 'fonts/bootstrap/[name].[ext]'},
		
        {from: './node_modules/ckeditor/', to: 'ckeditor/[path][name].[ext]', pattern: /\.(js|css)$/, includeSubdirectories: false},
        {from: './node_modules/ckeditor/adapters', to: 'ckeditor/adapters/[path][name].[ext]'},
        {from: './node_modules/ckeditor/lang', to: 'ckeditor/lang/[path][name].[ext]'},
        {from: './node_modules/ckeditor/plugins', to: 'ckeditor/plugins/[path][name].[ext]'},
        {from: './node_modules/ckeditor/skins', to: 'ckeditor/skins/[path][name].[ext]'}
    ])
    
    .copyFiles({
         from: './assets/admin_panel/images',
         to: 'images/[path][name].[ext]',
     })
    
    .autoProvidejQuery()
    .enableSassLoader(function(sassOptions) {}, {
        resolveUrlLoader: true
    })
    .configureFilenames({
        js: '[name].js?[contenthash]',
        css: '[name].css?[contenthash]',
        assets: '[name].[ext]?[hash:8]'
    })
    .enableSingleRuntimeChunk()
    .enableVersioning(Encore.isProduction())
    .enableSourceMaps( !Encore.isProduction() )
    
    //////////////////////////////////////////////////////////////////
    // ASSETS
    //////////////////////////////////////////////////////////////////
    .addEntry( 'js/app', './assets/admin_panel/js/app.js' )
    .addStyleEntry( 'css/global', './assets/admin_panel/css/main.scss' )
    
    .addEntry( 'js/settings', './assets/admin_panel/js/pages/settings.js' )
    .addEntry( 'js/applications', './assets/admin_panel/js/pages/applications.js' )
    .addEntry( 'js/profile', './assets/admin_panel/js/pages/profile.js' )
    .addEntry( 'js/taxonomy-vocabolaries', './assets/admin_panel/js/pages/taxonomy-vocabolaries.js' )
    .addEntry( 'js/taxonomy-vocabolaries-edit', './assets/admin_panel/js/pages/taxonomy-vocabolaries-edit.js' )
    
    .addEntry( 'js/pages-categories', './assets/admin_panel/js/pages/pages_categories.js' )
    .addEntry( 'js/pages-categories-edit', './assets/admin_panel/js/pages/pages_categories_edit.js' )
    .addEntry( 'js/pages-index', './assets/admin_panel/js/pages/pages-index.js' )
    .addEntry( 'js/pages-edit', './assets/admin_panel/js/pages/pages-edit.js' )
    
    .addEntry( 'js/users-edit', './assets/admin_panel/js/pages/users-edit.js' )
    .addEntry( 'js/users-roles', './assets/admin_panel/js/pages/users-roles.js' )
;

const adminPanelConfig = Encore.getWebpackConfig();
adminPanelConfig.name = 'adminPanel';

//=================================================================================================

Encore.reset();
Encore
    .setOutputPath( 'public/__application_slug__/build/' )
    .setPublicPath( '/build' )
   	
    .autoProvidejQuery()
    .enableSassLoader(function(sassOptions) {}, {
        resolveUrlLoader: true
    })
    .configureFilenames({
        js: '[name].js?[contenthash]',
        css: '[name].css?[contenthash]',
        assets: '[name].[ext]?[hash:8]'
    })
    .enableSingleRuntimeChunk()
    .enableVersioning(Encore.isProduction())
    .enableSourceMaps( !Encore.isProduction() )
    
    .copyFiles({
         from: './assets/__application_slug__/images',
         to: 'images/[path][name].[ext]',
     })
    
    // Add Entries
    .addStyleEntry( 'css/login', './assets/__application_slug__/css/login.scss' )
    .addEntry( 'js/login', './assets/__application_slug__/js/login.js' )
    
    .addStyleEntry( 'css/app', './assets/__application_slug__/css/main.scss' )
    .addEntry( 'js/app', './assets/__application_slug__/js/app.js' )
    
    .addEntry( 'js/home', './assets/__application_slug__/js/pages/home.js' )
;

const applicationConfig = Encore.getWebpackConfig();
applicationConfig.name = '__application_slug__';

//=================================================================================================
module.exports = [adminPanelConfig, applicationConfig];
