function allowDrop(ev) { 
				ev.preventDefault(); 
			} 
			
			function dragStart(ev) { 
				ev.dataTransfer.setData("text", ev.target.id); 
			} 
			
			function dragDrop(ev) { 
				ev.preventDefault(); 
				var data = ev.dataTransfer.getData("text"); 
				ev.target.appendChild(document.getElementById(data)); 
			} 

function dragEnd(event, ele_id) {
  				
			//alert(ele_id)
			var id1 = prompt("Set Id: ")
			var value1 = prompt("Set tag value")
				
			$(ele_id).attr({ "id": id1, "value": value1 });
			if(id1 != null){
					alert("Your tag id set successfully. ")
				}
			}


$(document).ready(function(){
		$("").click(function(){
	  		var data11 = $("#div1").html()
			var data12 = JSON.stringify(data11)
			var filename = prompt("Save as:")

			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
			    if (this.readyState == 4 && this.status == 200) {
			        document.getElementById("demo").innerHTML = this.responseText;
				    }
					  };
			    xhttp.open("GET", "http://localhost:8000/savefile/?html_file=data12&file_name=filename", true);
			    xhttp.send();
		  	});
		});
			
$(document).ready(function(){
    $("#save2").click(function(){
    	var datapage = $("#div1").html() 
    	var datapage1 =JSON.stringify(datapage)
    	var datapage2 = JSON.parse(datapage1)
	 	document.getElementById("gaud").innerHTML =  datapage2 
	  	});
    $("#a1").click(function(){
    	$("#c11").append(" <input type='button' class='btn btn-primary' draggable='true' ondragstart='dragStart(event)' value='basic' id='btn6' ondragend='dragEnd(event)'><br>");
    	});
    $("#a2").click(function(){
    	$("#c11").append(" <label id='label1'>label</label><br>");
    	});
    $("#a3").click(function(){
    	$("#c11").append(" <button>Appended text</button>");
    	});
    $("#a5").click(function(){
    	$("#c11").append(" <button>Appended text</button>");
    	});
    $("#a6").click(function(){
    	value1 = $(this).attr("value")
    	$.ajax({
    		type: "GET",
    		url: "/request/element/",
    		data: {value: value1},
    		success: function(data1){
    			$("#c11").append(data1)
    		}
    		});
    	});
    $("#a7").click(function(){
    	primarykey = 1
    	$.ajax({
    		type: "GET",
    		url: "/request/Element/",
    		data: {value: primarykey},
    		success: function(data1){
    			$("#c11").append(data1)
    		}
    		})
    	});	
    $("#a8").click(function(){
    	primarykey = 2
    	$.ajax({
    		type: "GET",
    		url: "/request/Element/",
    		data: {value: primarykey},
    		success: function(data1){
    			$("#c11").append(data1)
    		}
    		})
    	});	
    $("#a9").click(function(){
    	primarykey = 3
    	$.ajax({
    		type: "GET",
    		url: "/request/Element/",
    		data: {value: primarykey},
    		success: function(data1){
    			$("#c11").append(data1)
    		}
    		})
    	});
    $("#show_pages").click(function(){
    		var url = $(this).attr('href')
    		window.open(url, '_blank')
    	});
	});



$(document).ready(function() {
	$("#save").click(function(){
       	var data12 = $("#div1").html()
       	var data11 =JSON.stringify(data12)
		var filename = prompt("Save as:")
        $.ajax({
        	type :"GET",
            url : "/savefile/"+filename, 
            data: {html_page: data11},

            success : function(jsondata) { 
            	alert(jsondata) 
            	document.getElementById("div1").innerHTML = "<h1>Web page Saved!</h1>"
                //do something
	            },
            error : function() {
                    //do something
                }
        	});
    	});
    });	


/*$(document).ready(function(){
	$("#add_more_element2").click(function(){

	}):
});*/