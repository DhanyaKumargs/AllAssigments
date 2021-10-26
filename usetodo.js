function addElement(){
				var li = document.createElement("li");
				var inputValue = document.getElementById("todo").value;
				if(inputValue=="")
				{
					alert("Task must be filled out");
					return false;
				}
				var t = document.createTextNode(inputValue);
				li.appendChild(t);
				document.getElementById("mytodo").appendChild(li);
				document.getElementById("todo").value = "";
				var span = document.createElement("SPAN");
				var txt = document.createTextNode("Delete");
				span.className="close";
				span.appendChild(txt);
				li.appendChild(span);
				
			
			
			var close = document.getElementsByClassName("close");
			var i;
			for (i = 0; i < close.length; i++) {
			  close[i].onclick = function() {
				var div = this.parentElement;
				div.style.display = "none";
			  }
			}
		}
		
		
		function calculate(z)
		{
			var x =Number(document.getElementById("num1").value);
			var y =Number(document.getElementById("num2").value);
			if(x=="" || y==""){
				document.getElementById("result").innerHTML="give input";
				return false;
			}
				
			var temp =0;
			switch(z)
			{
				case 1:temp = x+y;
					   document.getElementById("result").innerHTML=temp;
					   break;
				case 2:temp = x-y;
					   document.getElementById("result").innerHTML=temp;
					   break;
				case 3: temp=x*y
						document.getElementById("result").innerHTML=temp;
					   break;
				case 4: temp=x/y
						document.getElementById("result").innerHTML=temp;
					   break;
				default:document.getElementById("result").innerHTML="not valid";
					   break;
				
			}
			if(isNaN(temp)){
					document.getElementById("result").innerHTML="not valid";
				}
		}