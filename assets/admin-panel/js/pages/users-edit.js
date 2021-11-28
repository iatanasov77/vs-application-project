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
	
	/**
     * Submit Checked Roles Tree
     */
	$( 'form[name="user_form"]' ).on( 'submit', function ( e )
	{
        let treeModule  = require( '../includes/tree.js' );
        var element = treeModule.createCheckedTreeElement(
            "selectedRoles",
            $( '#user_form_roles_options' ).combotree( 'tree' ).tree( 'getChecked' )
        );
        $( this ).append( element );
	});
	
});
 