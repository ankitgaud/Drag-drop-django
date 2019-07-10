$("#print").hide();


function myfunction(id){
	var catid = id;
	/*catid = $(this).attr("id");*/
	$.ajax({
		type:"GET",
		url: "/Open_page/",
		data:{
			page_id: catid,
			},
		success: function ( data )
			{	
			document.getElementById("div").innerHTML =  JSON.parse(data)
			}
			});
		$("#print").show();	
		}



/*document.getElementById("print").accessKey = "w";*/		
/*$( "#" ).click(function() {
    var e = jQuery.Event( "keydown", { keyCode: 83, ctrlKey:true} );
    jQuery("body").trigger( e );
});*/