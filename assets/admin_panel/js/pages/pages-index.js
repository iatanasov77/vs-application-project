
require( '../includes/clone_preview.js' );
$( function()
{	
	$( ".btnDelete" ).on( "click", function ( e ) 
	{
	    e.preventDefault();

	    $( '#deleteForm' ).attr( 'action', $( this ).attr( 'href' ) );
	    $( '#page_delete__token' ).val( $( this ).attr( 'data-csrftoken' ) );
	            
	    $( '<div title="DELETE ITEM">Do you want to delete this Item?</div>' ).dialog({
	        buttons: {
	            "Ok": function () {
	            	$( '#deleteForm' ).submit();
	            },
	            "Cancel": function () {
	            	$( '#deleteForm' ).attr( 'action', '' );
	            	$( '#page_delete__token' ).val( '' );
	                $(this).dialog( "close" );
	            }
	        }
	    });
	});
});
