 var area = document.getElementById('middle2');
 var iliHeight = 35;
 var speed = 50;
 var time;
 var delay= 2000;
 area.scrollTop=0;   
 area.innerHTML+=area.innerHTML;
 function startScroll(){
	 time=setInterval("scrollUp()",speed);
	 area.scrollTop++;
	 }
 function scrollUp(){
	 if(area.scrollTop % iliHeight==0){
		 clearInterval(time);
		 setTimeout(startScroll,delay);
		 }else{
			 area.scrollTop++;
			 if(area.scrollTop >= area.scrollHeight/2){
				 area.scrollTop =0;
				 }
			 }
	 }
	 setTimeout(startScroll,delay)
 
 
 
 function $(id){
	 return typeof id==='string'?document.getElementById(id):id;
 }
 
  window.onload=function(){
	  var titles=$('tab-top').getElementsByTagName('li');
	  var divs=$('tab-bottom').getElementsByTagName('div');
	  if(titles.length!=divs.length) return;
	  for(var i=0; i<titles.length; i++){
		titles[i].id=i;  
		titles[i].onmouseover=function(){
			for(var j=0;j<titles.length;j++){
				titles[j].className=null;
				divs[j].style.display='none';
				}
			this.className='select';
			divs[this.id].style.display='block';	
		}  
	  } 
  }
 



