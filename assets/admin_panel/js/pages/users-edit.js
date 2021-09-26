require( 'jquery-easyui/css/easyui.css' );
require( 'jquery-easyui/js/jquery.easyui.min.js' );

$( function()
{
	if ( parseInt( $( '#user-id' ).text(), 10 ) > 0 ) {
		$( '#user_form_password_first' ).removeAttr( "required" );
		$( '#user_form_password_second' ).removeAttr( "required" );
	}
});
 