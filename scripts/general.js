function call (un_id) {
  return document.getElementById(un_id);
}

function setFooter(){
	call('footer').style.position = '';
	var yMax = document.documentElement.clientHeight || document.body.clientHeight;
	if(yMax > document.body.offsetHeight){
		call('foot').style.position = 'absolute';
		}
	 window.onresize = setFooter;
}
window.onload = setFooter;

