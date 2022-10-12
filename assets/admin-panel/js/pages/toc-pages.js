// JqueryUi conflicts with JqueryEasyUi
require( 'jquery-ui-dist/jquery-ui.js' );
require( 'jquery-ui-dist/jquery-ui.css' );
require( 'jquery-ui-dist/jquery-ui.theme.css' );

require( '@fortawesome/fontawesome-free/css/all.css' );
require( '@fortawesome/fontawesome-free/js/all.js' );

import { changeOrder, computeNewPosition, changeOrderNew, getInsertAfterId } from '../includes/sortable.js';

$( function ()
{
    let sortableIds;
    $( "#tocPagesTableBody" ).sortable({
        start: function( event, ui ) {
            sortableIds = $( "#tocPagesTableBody" ).sortable( "toArray" );
            console.log( sortableIds );
        },
        
        update: function( event, ui ) {
            var itemId      = ui.item.attr( "data-node-id" );
            var sortedIDs   = $( "#tocPagesTableBody" ).sortable( "toArray" );
            var itemIndex   = sortedIDs.indexOf( 'tocPage-' + itemId );
            
            var sortedItems = [];
            for ( let i = 0; i < sortedIDs.length; i++ ) {
                sortedItems.push( $( '#' + sortedIDs[i] ).attr( 'data-node-id' ) );
            }
            console.log( sortedIDs );
            console.log( sortedItems );
            //alert( "Position: " + ui.position.top + " Original Position: " + ui.originalPosition.top );
            
            let insertAfterId = getInsertAfterId( itemIndex, sortedItems );
            changeOrderNew( itemId, insertAfterId );
        }
    });
});