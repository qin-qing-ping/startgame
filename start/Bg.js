class Bg{
	constructor(canvas,ctx,data) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.data = data;
	    this.img = document.getElementById('bg');
		this.width = 2*this.canvas.width;
		this.height = this.canvas.height;
		this.x1 = 0
		this.x2 = 2*this.canvas.width
		this.bgmove = 'up';//up  move  
		
	}
	draw(){
		
		this.ctx.drawImage(this.img,this.x1,0,this.width,this.height)
		this.ctx.drawImage(this.img,this.x2,0,this.width,this.height)
		
	}
	update(){
		// if(this.bgmove == 'moveright'){
		this.x1 = this.x1-this.data.movespeed;
		this.x2 = this.x2-this.data.movespeed;
		if(this.x1 == - 2*this.canvas.width){
			this.x1 = this.x2 +2*this.canvas.width;
		}
		if(this.x2 == - 2*this.canvas.width){
			this.x2 = this.x1 +2*this.canvas.width;
		}
		// }
		// if(this.bgmove == 'moveleft'){
		// this.x1 = this.x1+this.data.movespeed;
		// this.x2 = this.x2+this.data.movespeed;
		// if(this.x1 ==  2*this.canvas.width){
		// 	this.x1 = this.x2 -2*this.canvas.width;
		// }
		// if(this.x2 ==  2*this.canvas.width){
		// 	this.x2 = this.x1 -2*this.canvas.width;
		// }
		// }
		
	}
}