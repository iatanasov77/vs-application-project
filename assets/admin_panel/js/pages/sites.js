//require ( '../../css/custom.css' );
//require ( 'jquery-duplicate-fields/jquery.duplicateFields.js' );

$( function ()
{

/*
    $( '.attributesContainer' ).duplicateFields({
        btnRemoveSelector: ".btnRemoveField",
        btnAddSelector:    ".btnAddField"
    });
*/

    $( '.btnEdit' ).on( 'click', function()
    {
		$.ajax({
			type: "GET",
		 	url: $( this ).attr( 'data-url' ),
			success: function( response )
			{
				$( '#siteEdit > div.card-body' ).html( response );
				$( '#site-edit-modal' ).modal( 'toggle' );
				$( '#btnEditInstallManual').show();
			},
			error: function()
			{
				alert( "SYSTEM ERROR!!!" );
			}
		});
    });
    
    $( '.btnSettings' ).on( 'click', function()
    {
    	var applicationTitle	= $( this ).attr( 'data-application_title' );
    	$.ajax({
			type: "GET",
		 	url: $( this ).attr( 'data-url' ),
			success: function( response )
			{
				$( '#modalApplicationSettingsTitle' ).text( applicationTitle );
				$( '#siteSettings > div.card-body' ).html( response );
				$( '#site-settings-modal' ).modal( 'toggle' );
				$( '#btnEditInstallManual').show();
			},
			error: function()
			{
				alert( "SYSTEM ERROR!!!" );
			}
		});
    });
    
    $( '#site-delete-modal' ).on( 'show.bs.modal', function ( event )
    {
    	  var button = $( event.relatedTarget ) // Button that triggered the modal
    	  
    	  $( '#deleteSiteTitle').text( button.data( 'title' ) );
    	  $( '#btnDeleteSite').attr( 'href', button.data( 'url' ) );
    	  
    	  /*
    	  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    	  var modal = $(this)
    	  modal.find('.modal-title').text('New message to ' + data)
    	  modal.find('.modal-body input').val(data)
    	  */
    });
    
    $( '#btnSaveGeneralSettings' ).on( 'click', function( e )
    {
    	$( '#formSettings_0' ).submit();
    });
    
    $( '#btnSaveSite' ).on( 'click', function( e )
    {
    	$( '#formSiteEdit' ).submit();
    });
    
    $( '#btnSaveSettings' ).on( 'click', function( e )
    {
    	var settingsForm	= $( '#site-settings-modal' ).find( 'form' );
    	
    	settingsForm.submit();
    });
});
