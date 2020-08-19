document.getElementById('out').addEventListener("click",function(){
 	 var w=document.getElementById('w').value;
     var h=document.getElementById('h').value;
     var t=w/(h*h);
 	document.getElementById('out').innertext="your bmi is"+t;
 });

