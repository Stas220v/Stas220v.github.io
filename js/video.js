var player = document.getElementById("video_player");
var bc = document.getElementById("bc_video");
function pl(el){	
	bc.style.visibility = "visible";
	bc.style.opacity = "1";
	player.src=el.id;
	player.play();
}
function st(){
	bc.style.opacity = "0";
	bc.style.visibility = "hidden";
	if(player==document.pictureInPictureElement){
		document.exitPictureInPicture();
	}	
	player.pause();
}