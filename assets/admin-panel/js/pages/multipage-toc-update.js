require( 'bootstrap-gtreetable/dist/bootstrap-gtreetable.css' );
require( 'bootstrap-gtreetable/dist/bootstrap-gtreetable.js' );
require( 'jquery-easyui/css/easyui.css' );
require( 'jquery-easyui/js/jquery.easyui.min.js' );

$( function()
{
	$( '#btnTocPage' ).on( 'click', function( e )
	{
		e.preventDefault();
		
		$.ajax({
			type: "GET",
		 	url: $( this ).attr( 'data-url' ),
			success: function( response )
			{
				$( '#modalBodyTocPage > div.card-body' ).html( response );
				$( '#multipageTocPageModal' ).modal( 'toggle' );
				//$( '#btnEditInstallManual').show();
			},
			error: function()
			{
				alert( "SYSTEM ERROR!!!" );
			}
		});
	});
	
	$( '#btnSaveTocPage' ).on( 'click', function( e )
	{
		$( '#form_toc_page' ).submit();
	});

	$( '#tableTocPages' ).on( 'click', '.node-action-5', function( e )
	{
		e.cancelBubble = true;
		e.preventDefault();
		e.stopPropagation();
		
		var tocPageId	= $( this ).closest( 'tr' ).attr( 'data-id' );
		var tocPageUrl	= $( '#btnTocPage' ).attr( 'data-url' ) + '?toc-page-id=' + tocPageId;
		$.ajax({
			type: "GET",
		 	url: tocPageUrl,
			success: function( response )
			{
				$( '#modalBodyTocPage > div.card-body' ).html( response );
				$( '#multipageTocPageModal' ).modal( 'toggle' );
				//$( '#btnEditInstallManual').show();
			},
			error: function()
			{
				alert( "SYSTEM ERROR!!!" );
			}
		});
	});
	
	// Documentation: https://github.com/gilek/bootstrap-gtreetable
	////////////////////////////////////////////////////////////////////
	$( '#tableTocPages' ).gtreetable({
		'manyroots': true,
		'readonly': false,
	
		'source': function ( id ) {
			return {
				type: 'GET',
				url: $( '#tableTocPages' ).attr( 'data-sourceUrl' ),
				data: { 'parentId': id },
				dataType: 'json',
				error: function( XMLHttpRequest ) {
					alert( 'GTreeTable ERROR !!!' );
					alert( XMLHttpRequest.status + ': ' + XMLHttpRequest.responseText );
				}
  	      	}
  	    },
  	    'onSave': function( oNode ) {
			return jQuery.ajax({
				type: 'POST',
				url: !oNode.isSaved() ? '/gtreetable/nodeCreate' : $( '#tblCategories_GTreeTable' ).attr( 'data-updateUrl' ) + oNode.getId(),
				data: {
					parent: oNode.getParent(),
			        name: oNode.getName(),
			        position: oNode.getInsertPosition(),
			        related: oNode.getRelatedNodeId()
				},
				dataType: 'json',
				success: function( response ) {
       				//alert( response.status );
                	if ( response.status == 'SUCCESS' ) {
                		location.reload();
                	} else {
                		alert( 'ERROR !!!' );
                	}
                },
				error: function( xhr, status, error ) {
                    var err = eval( "(" + xhr.responseText + ")" );
  					alert( err.Message );
                }
			});        
		},
  	    "onDelete": function ( oNode ) {
            return {
                type: 'DELETE',
                url: $( '#tblCategories_GTreeTable' ).attr( 'data-deleteUrl' ) + oNode.getId(),
                dataType: 'json',
                success: function( response ) {
                	//alert( response.status )
                	if ( response.status == 'SUCCESS' ) {
                		location.reload();
                	}
                },
                error: function( xhr, status, error ) {
                    var err = eval( "(" + xhr.responseText + ")" );
  					alert( err.Message );
                }
            };
        },
        
        'draggable': true,
		'onMove': function ( oSource, oDestination, position ) {
			return {
				type: 'POST',
				url: $( '#tblCategories_GTreeTable' ).attr( 'data-moveUrl' ) + oSource.getId() + '-' + oDestination.getId() + '-' + position,
				data: {
					related: oDestination.getId(),
					position: position
				},
				dataType: 'json',
				success: function( response ) {
                	if ( response.status != 'SUCCESS' ) {
                		alert( 'ERROR !!!' );
                		location.reload();
                	}
                },
				error: function( xhr, status, error ) {
                    var err = eval( "(" + xhr.responseText + ")" );
  					alert( err.Message );
                }
			}; 
		}
  	});
});
