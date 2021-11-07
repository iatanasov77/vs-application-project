// JqueryUi conflicts with JqueryEasyUi
require( 'jquery-ui-dist/jquery-ui.js' );
require( 'jquery-ui-dist/jquery-ui.css' );
require( 'jquery-ui-dist/jquery-ui.theme.css' );

$( function()
{
	$( ".btnDelete" ).on( "click", function ( e ) 
	{
	    e.preventDefault();

	    $( '#deleteForm' ).attr( 'action', $( this ).attr( 'href' ) );
	    $( '#resource_delete__token' ).val( $( this ).attr( 'data-csrftoken' ) );
	    
	    $( '<div title="DELETE ITEM">Do you want to delete this Item?</div>' ).dialog({
	        buttons: {
	            "Ok": function () {
	            	$( '#deleteForm' ).submit();
	            },
	            "Cancel": function () {
	            	$( '#deleteForm' ).attr( 'action', '' );
	            	$( '#resource_delete__token' ).val( '' );
	                $( this ).dialog( "close" );
	            }
	        }
	    });
	});
});
