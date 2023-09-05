const $ = require( 'jquery' );
global.$ = $;
window.$ = $;

require( '@popperjs/core/dist/umd/popper.js' );
require( 'bootstrap' );
require( './includes/vs_cookieconsent.js' );

/* Require Global Application Scripts */
require( '../vendor/application-login-page/js/main.js' );

