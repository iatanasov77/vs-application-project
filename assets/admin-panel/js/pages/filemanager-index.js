require( '../includes/resource-delete.js' );
//require ( 'jquery-duplicate-fields/jquery.duplicateFields.js' );

$( function()
{
    $( '.btnUploadFiles' ).on( 'click', function()
    {
        $.ajax({
            type: "GET",
            url: $( this ).attr( 'data-url' ),
            success: function( response )
            {
                $( '#cardUploadFile > div.card-body' ).html( response );
                $( '#modalUploadFile' ).modal( 'toggle' );
            },
            error: function()
            {
                alert( "SYSTEM ERROR!!!" );
            }
        });
    });
});
