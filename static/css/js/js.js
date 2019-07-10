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
						  $("#save").click(function(){
						  	var data11 = $("#div1").html()
						  	//alert(data11)
						  	var myWindow = window.open("", "_null");
 								 myWindow.document.write(data11);
						  	
					  		});

						  	});
					