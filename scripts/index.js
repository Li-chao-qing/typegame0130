window.onload=function(){
	var 
	scene=document.getElementById('scene'),
	block,letter,
	start=document.getElementById('start'),
	pause=document.getElementById('pause'),
	replay=document.getElementById('replay'),
	help=document.getElementById('help'),
	info=document.getElementById('info');
	var 
		s,
		time=document.getElementById('time'),
		open=false,timerId,count=0,kaiguan=false;

	for(var i=0;i<52;i++){
		block=document.createElement('div');
		block.setAttribute('class','block');
		scene.appendChild(block);
		letter=65+Math.floor(Math.random()*(123-65));//大写字母65-90
		// 小写字母97-122
		while(letter>90&&letter<97){
			letter=65+Math.floor(Math.random()*(123-65));
		}
		block.innerHTML=String.fromCharCode(letter);
		// console.log(letter,String.fromCharCode(letter));
	}
	start.onclick=function(){
		kaiguan=true;
	}
	pause.onclick=function(){
		kaiguan=false;
		open=false;
	}
	replay.onclick=function(){
		location.reload();
	}
	help.onclick=function(){
		if(info.style.display=='none'){
			info.style.display='block';
		
		}else{
			info.style.display='none';
			
		}
		
	}
	var first=scene.firstElementChild;
	document.onkeydown=function(e){
		if(kaiguan){
			open=true;
			s=first.innerHTML.charCodeAt(0);
			if(e.shiftKey){
				if(e.keyCode!==s){	return;}
			}else{
				if(e.keyCode+32!==s){ return;}	
			}
			first.style.color='black';
			first=first.nextElementSibling;
			if(first==null){
				clearInterval(timerId);
				alert('用时'+count+'s!');
			}
		}
	};
	clearInterval(timerId);
	timerId=setInterval(function(){
		if(open){

			count+=1;
			time.innerHTML=count;

		}
	},1000);
	document.onmousedown=function(e){
		e.preventDefault();
	};
};//