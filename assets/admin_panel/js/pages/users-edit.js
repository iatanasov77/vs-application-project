require( 'jquery-easyui/css/easyui.css' );
require( 'jquery-easyui/js/jquery.easyui.min.js' );

$( function()
{
	// BECAUSE: An invalid form control with name='' is not focusable.
	$( 'form[name="user_form"]' ).attr( 'novalidate', true );
	
	if ( parseInt( $( '#user-id' ).text(), 10 ) > 0 ) {
		$( '#user_form_password_first' ).removeAttr( "required" );
		$( '#user_form_password_second' ).removeAttr( "required" );
	}
});
 