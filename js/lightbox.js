// JavaScript Document
function LightBox(parent)
{
	var that = this;
	this.parent = parent;
	this.divLb;
	this.btnClose;
	this.image;
	
	this.init = function()
	{
		that.parent.style.position = "relative";
		/*creating lb Element*/
		that.divLb = document.createElement("div");
		that.divLb.className = "lightbox";
		that.divLb.style.position="absolute";
		that.parent.appendChild(that.divLb);
		
		that.image = document.createElement("img");
		var src = document.getElementById("postSrc").getAttribute("src");
		that.image.setAttribute("src",src);
		that.image.style.width="inherit";
		that.image.style.height="inherit";
		that.divLb.appendChild(that.image);
		
		/*close btn*/
		that.btnClose=document.createElement("div");
		that.btnClose.className = "lbCloseButton";
		that.btnClose.style.position="absolute";
		that.divLb.appendChild(that.btnClose);
		that.btnClose.onclick = function()
		{		
			that.parent.removeChild(that.divLb);
			that.parent.style.position = "none";
		}		
	}
}
var btnZoom = document.getElementById("btnZoom");
var lb = new LightBox((document.getElementById("main")));
btnZoom.onclick = function()
{
	console.log("clicked");
	lb.init();
	return false;
}