$( function()
{
	$( '#dialogSelectPayment' ).on( 'show.bs.modal', function ( e )
	{
			var price			= e.relatedTarget.dataset.price;
			var packagePlanId	= e.relatedTarget.dataset.planid;
			
			$( e.target ).find( '.price' ).text( price );
			$( '#packagePlanId' ).val( packagePlanId );
	});

	$( '.selectPaymentMethod' ).on( 'change', function()
	{
        var url		= $(this).attr( 'data-url' );
        var data	= {
        	'class':			$(this).val(),
        	'packagePlanId': 	$( '#packagePlanId' ).val()
        };
        
        $.get( url, data, function( data ) 
        {
            $( '#boxPaymentMethodOptions2' ).html( data );
            
        }).done(function()
        {
            //alert( "SUCCESS!" );
        })
        .fail(function()
        {
        	$( '#boxPaymentMethodOptions2' ).text( 'ERROR!' );
        })
        .always(function()
        {
        	$( '#paymentMethodOptions2' ).show();
        });
    });
    
    $( 'form[name="ia_web_content_thief_project_processors"]' ).on( 'submit', function( e )
    {
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function (data) {
                $('#boxProcessorOptions').html(data);
            }, 
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $('#boxProcessorOptions').html('<p>FATAL ERROR!!!</p>' + $('#boxProcessorOptions').html());
            }
        });
        
        e.preventDefault();
    });

});
