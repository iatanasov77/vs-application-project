const Encore        = require( '@symfony/webpack-encore' );
const path          = require( 'path' );
const pathExists    = require( 'path-exists' );

const applicationAssetsPath         = './vendor/vankosoft/application/src/Vankosoft/ApplicationBundle/Resources/themes/default/assets';
const usersSubscriptionsAssetsPath  = './vendor/vankosoft/users-subscriptions-bundle/lib/Resources/themes/default/assets';
const paymentAssetsPath             = './vendor/vankosoft/payment-bundle/lib/Resources/themes/default/assets';
const catalogAssetsPath             = './vendor/vankosoft/catalog-bundle/lib/Resources/themes/default/assets';

const defaultThemePath              = '../../vendor/vankosoft/application/src/Vankosoft/ApplicationBundle/Resources/themes/default/assets';
const artgrisAssetsPath             = '../../vendor/artgris/filemanager-bundle/Resources/public';
const baseThemePath                 = '../../vendor/vankosoft/application-themes/AdminPanel_VelzonDefault/assets';

const addCKEditor = require( '../../vendor/daddl3/symfony-ckeditor-5-webpack/assets/js/ckeditor-webpack-entry' );

/** Encore, sourceMap **/
addCKEditor( Encore, true );

Encore
    .setOutputPath( 'public/admin-panel/build/velzon-theme/' )
    .setPublicPath( '/build/velzon-theme/' )
  
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
    
    .addAliases({
        '@': path.resolve( __dirname, defaultThemePath ),
        '@@': path.resolve( __dirname, baseThemePath )
    })
    
    // Default Theme Images
    .copyFiles({
         from: path.resolve( __dirname, defaultThemePath ) + '/images',
         to: 'images/[path][name].[ext]',
     })
    
    // FOS CkEditor
    .copyFiles([
        {from: './node_modules/ckeditor4/', to: 'ckeditor/[path][name].[ext]', pattern: /\.(js|css)$/, includeSubdirectories: false},
        
        // Add This When Debugging With Dev Package: https://github.com/ckeditor/ckeditor4.git
        // {from: './node_modules/ckeditor4/core', to: 'ckeditor/core/[path][name].[ext]'},
        
        {from: './node_modules/ckeditor4/adapters', to: 'ckeditor/adapters/[path][name].[ext]'},
        {from: './node_modules/ckeditor4/lang', to: 'ckeditor/lang/[path][name].[ext]'},
        {from: './node_modules/ckeditor4/plugins', to: 'ckeditor/plugins/[path][name].[ext]'},
        {from: './node_modules/ckeditor4/skins', to: 'ckeditor/skins/[path][name].[ext]'}
    ])
    
    // CKeditor 4 Extra Plugins
    .copyFiles([
        {from: path.resolve( __dirname, defaultThemePath ) + '/vendor/ckeditor4_plugins', to: 'ckeditor/plugins/[path][name].[ext]'},
    ])
    
    // Artgris Filemanager
    .copyFiles([
        {from: path.resolve( __dirname, artgrisAssetsPath ), to: 'artgrisfilemanager/[path][name].[ext]'},
    ])
    
    // Velzon Images
    .copyFiles([
        {from: path.resolve( __dirname, baseThemePath + '/images' ), to: 'images/[path][name].[ext]'},
        //{from: './themes/CompasBilling/assets/vendor/Velzon_v3.5.0/lang', to: 'lang/[path][name].[ext]'},
        {from: path.resolve( __dirname, baseThemePath + '/vendor/Velzon_v4.2.0/fonts' ), to: 'fonts/[path][name].[ext]'},
        {from: path.resolve( __dirname, baseThemePath + '/vendor/Velzon_v4.2.0/images/flags' ), to: 'images/flags/[path][name].[ext]'},
        {from: path.resolve( __dirname, baseThemePath + '/vendor/Velzon_v4.2.0/images/users' ), to: 'images/users/[path][name].[ext]'},
        {from: path.resolve( __dirname, baseThemePath + '/vendor/Velzon_v4.2.0/images/svg' ), to: 'images/svg/[path][name].[ext]'},
    ])
    
    // Add an entry for CKEditor 5
    .addEntry( 'ckeditor5', './vendor/daddl3/symfony-ckeditor-5-webpack/assets/js/ckeditor5.js' )
    .configureSplitChunks( splitChunks => {
        splitChunks.chunks = 'all';
        splitChunks.name = false;
        splitChunks.cacheGroups = {
            styles: {
                name: false,
                test: /\.css$/,
                chunks: 'all',
                enforce: true,
            }
        };
    })
    
    // Global Assets
    .addStyleEntry( 'css/app', './themes/AdminPanel_VelzonChild/assets/css/app.scss' )
    .addEntry( 'js/layout', './themes/AdminPanel_VelzonChild/assets/layout.js' )
    .addEntry( 'js/app', './themes/AdminPanel_VelzonChild/assets/app.js' )
    .addEntry( 'js/app-login', './themes/AdminPanel_VelzonChild/assets/app-login.js' )
    
    // VsApplicationBundle Pages
    .addEntry( 'js/profile-edit', './themes/AdminPanel_VelzonChild/assets/js/pages/profile-edit.js' )
    .addEntry( 'js/velzon-profile', './themes/AdminPanel_VelzonChild/assets/js/pages/profile.js' )
    
    //////////////////////////////////////////////////////////////////
    // Standard Pages
    //////////////////////////////////////////////////////////////////
    //.addEntry( 'js/app', applicationAssetsPath + '/js/app.js' )
    .addStyleEntry( 'css/global', applicationAssetsPath + '/css/main.scss' )
    
    .addEntry( 'js/resource-delete', applicationAssetsPath + '/js/pages/resource-delete.js' )
    
    .addEntry( 'js/dashboard', applicationAssetsPath + '/js/pages/dashboard.js' )
    .addEntry( 'js/settings', applicationAssetsPath + '/js/pages/settings.js' )
    .addEntry( 'js/applications', applicationAssetsPath + '/js/pages/applications.js' )
    .addEntry( 'js/profile', applicationAssetsPath + '/js/pages/profile.js' )
    .addEntry( 'js/taxonomy-vocabolaries', applicationAssetsPath + '/js/pages/taxonomy-vocabolaries.js' )
    .addEntry( 'js/taxonomy-vocabolaries-edit', applicationAssetsPath + '/js/pages/taxonomy-vocabolaries-edit.js' )
    .addEntry( 'js/locales', applicationAssetsPath + '/js/pages/locales.js' )
    .addEntry( 'js/cookie-consent-translations', applicationAssetsPath + '/js/pages/cookie-consent-translations.js' )
    .addEntry( 'js/cookie-consent-translations-edit', applicationAssetsPath + '/js/pages/cookie-consent-translations-edit.js' )
    .addEntry( 'js/tags-whitelist-contexts', applicationAssetsPath + '/js/pages/tags-whitelist-contexts.js' )
    .addEntry( 'js/tags-whitelist-contexts-edit', applicationAssetsPath + '/js/pages/tags-whitelist-contexts-edit.js' )
    
    .addEntry( 'js/pages-categories', applicationAssetsPath + '/js/pages/pages_categories.js' )
    .addEntry( 'js/pages-categories-edit', applicationAssetsPath + '/js/pages/pages_categories_edit.js' )
    .addEntry( 'js/pages-index', applicationAssetsPath + '/js/pages/pages-index.js' )
    .addEntry( 'js/pages-edit', applicationAssetsPath + '/js/pages/pages-edit.js' )
    .addEntry( 'js/documents-index', applicationAssetsPath + '/js/pages/documents-index.js' )
    .addEntry( 'js/documents-edit', applicationAssetsPath + '/js/pages/documents-edit.js' )
    .addEntry( 'js/toc-pages', applicationAssetsPath + '/js/pages/toc-pages.js' )
    .addEntry( 'js/toc-pages-delete', applicationAssetsPath + '/js/pages/toc-pages-delete.js' )
    .addEntry( 'js/multipage-toc-update', applicationAssetsPath + '/js/pages/multipage-toc-update.js' )
    
    .addEntry( 'js/users-index', applicationAssetsPath + '/js/pages/users-index.js' )
    .addEntry( 'js/users-edit', applicationAssetsPath + '/js/pages/users-edit.js' )
    .addEntry( 'js/users-roles-index', applicationAssetsPath + '/js/pages/users-roles-index.js' )
    .addEntry( 'js/users-roles-edit', applicationAssetsPath + '/js/pages/users-roles-edit.js' )
    
    .addEntry( 'js/filemanager-index', applicationAssetsPath + '/js/pages/filemanager-index.js' )
    .addEntry( 'js/filemanager-file-upload', applicationAssetsPath + '/js/pages/filemanager-file-upload.js' )
    
    .addEntry( 'js/widget-groups', applicationAssetsPath + '/js/pages/widget-groups.js' )
    .addEntry( 'js/widgets', applicationAssetsPath + '/js/pages/widgets.js' )
    .addEntry( 'js/widgets-edit', applicationAssetsPath + '/js/pages/widgets-edit.js' )
    
    .addEntry( 'js/helpcenter-questions', applicationAssetsPath + '/js/pages/helpcenter-questions.js' )
    .addEntry( 'js/helpcenter-questions-edit', applicationAssetsPath + '/js/pages/helpcenter-questions-edit.js' )
    .addEntry( 'js/quick-links', applicationAssetsPath + '/js/pages/quick-links.js' )
    .addEntry( 'js/quick-links-edit', applicationAssetsPath + '/js/pages/quick-links-edit.js' )
    .addEntry( 'js/sliders', applicationAssetsPath + '/js/pages/sliders.js' )
    .addEntry( 'js/sliders-edit', applicationAssetsPath + '/js/pages/sliders-edit.js' )
    .addEntry( 'js/sliders-items', applicationAssetsPath + '/js/pages/sliders-items.js' )
    .addEntry( 'js/sliders-items-edit', applicationAssetsPath + '/js/pages/sliders-items-edit.js' )
;

//////////////////////////////////////////////////////////////////
// Subscription Pages
//////////////////////////////////////////////////////////////////
if ( pathExists.sync( usersSubscriptionsAssetsPath ) ) {
    Encore
        .addEntry( 'js/payed-services-edit', usersSubscriptionsAssetsPath + '/js/pages/payed-services-edit.js' )
        .addEntry( 'js/payed-services-listing', usersSubscriptionsAssetsPath + '/js/pages/payed-services-listing.js' )
        .addEntry( 'js/mailchimp-audiences-listing', usersSubscriptionsAssetsPath + '/js/pages/mailchimp-audiences-listing.js' )
        .addEntry( 'js/payed-service-subscriptions', usersSubscriptionsAssetsPath + '/js/pages/payed-service-subscriptions.js' )
    ;
}

//////////////////////////////////////////////////////////////////
// Payment Pages
//////////////////////////////////////////////////////////////////
if ( pathExists.sync( paymentAssetsPath ) ) {
    Encore
        .addEntry( 'js/gateway-config', paymentAssetsPath + '/js/pages/gateway-config.js' )
        .addEntry( 'js/currencies', paymentAssetsPath + '/js/pages/currencies.js' )
        .addEntry( 'js/exchange-rates', paymentAssetsPath + '/js/pages/exchange-rates.js' )
        .addEntry( 'js/recieved-payments', paymentAssetsPath + '/js/pages/recieved-payments.js' )
        .addEntry( 'js/orders', paymentAssetsPath + '/js/pages/orders.js' )
        .addEntry( 'js/coupon-objects', paymentAssetsPath + '/js/pages/coupon-objects.js' )
        .addEntry( 'js/coupons-index', paymentAssetsPath + '/js/pages/coupons-index.js' )
        .addEntry( 'js/coupons-edit', paymentAssetsPath + '/js/pages/coupons-edit.js' )
        .addEntry( 'js/promotions-index', paymentAssetsPath + '/js/pages/promotions-index.js' )
        .addEntry( 'js/promotions-edit', paymentAssetsPath + '/js/pages/promotions-edit.js' )
        .addEntry( 'js/promotion-coupons-index', paymentAssetsPath + '/js/pages/promotion-coupons-index.js' )
        .addEntry( 'js/promotion-coupons-edit', paymentAssetsPath + '/js/pages/promotion-coupons-edit.js' )
        .addEntry( 'js/customer-groups', paymentAssetsPath + '/js/pages/customer-groups.js' )
        .addEntry( 'js/customer-groups-edit', paymentAssetsPath + '/js/pages/customer-groups-edit.js' )
        .addEntry( 'js/stripe-objects', paymentAssetsPath + '/js/pages/stripe-objects.js' )
        .addEntry( 'js/stripe-object-form', paymentAssetsPath + '/js/pages/stripe-object-form.js' )
    ;
}
    
//////////////////////////////////////////////////////////////////
// Catalog Pages
//////////////////////////////////////////////////////////////////
if ( pathExists.sync( catalogAssetsPath ) ) {
    Encore
        .addEntry( 'js/product-categories', catalogAssetsPath + '/js/pages/product-categories.js' )
        .addEntry( 'js/product-categories-edit', catalogAssetsPath + '/js/pages/product-categories-edit.js' )
        .addEntry( 'js/products-index', catalogAssetsPath + '/js/pages/products-index.js' )
        .addEntry( 'js/products-edit', catalogAssetsPath + '/js/pages/products-edit.js' )
        .addEntry( 'js/pricing-plan-categories', catalogAssetsPath + '/js/pages/pricing-plan-categories.js' )
        .addEntry( 'js/pricing-plan-categories-edit', catalogAssetsPath + '/js/pages/pricing-plan-categories-edit.js' )
        .addEntry( 'js/pricing-plans-index', catalogAssetsPath + '/js/pages/pricing-plans-index.js' )
        .addEntry( 'js/pricing-plans-edit', catalogAssetsPath + '/js/pages/pricing-plans-edit.js' )
        .addEntry( 'js/pricing-plan-subscriptions', catalogAssetsPath + '/js/pages/pricing-plan-subscriptions.js' )
        .addEntry( 'js/pricing-plan-subscription-payments', catalogAssetsPath + '/js/pages/pricing-plan-subscription-payments.js' )
        .addEntry( 'js/association-types-index', catalogAssetsPath + '/js/pages/association-types-index.js' )
    ;
}

const config = Encore.getWebpackConfig();
config.name = 'AdminPanel_VelzonDefault';

module.exports = config;