class Gui{
	constructor(canvas,data,ctx) {
		this.canvas = canvas;
		this.data = data;
		this.ctx = ctx;
	    this.img = document.getElementById('guaiwu')
		this.x =this.canvas.width;
		this.y = this.data.lineheight-35;
		
		this.guiwidth = 50;
		this.guiheight = 40;
		this.speed =8;
	}
	draw(){
		
		this.ctx.drawImage(this.img,this.x,this.y,this.guiwidth,this.guiheight)
	}
	update(){
		//背景动起来
		this.x = this.x-this.speed;
		
		if(this.x <= -this.guiwidth){
			this.x =this.canvas.width+Math.random()*this.canvas.width;
		}
		}
	}
