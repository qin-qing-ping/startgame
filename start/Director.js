class Director{
	constructor(canvas,ctx,role,gui,data) {
	    this.canvas = canvas;
		this.ctx = ctx;
		this.role = role;
		this.gui = gui;
		this.data = data;
		this.img = document.getElementById('gameover')
	}
	draw(){
		this.ctx.drawImage(this.img,250,100,400,250)
	}
	update(){
		//求出角色中心坐标
		let x1 = this.role.x+this.role.rolewidth/2;
		let y1 = this.role.y+this.role.roleheight/2;
		//去除怪物中心坐标
		let x2 = this.gui.x+this.gui.guiwidth/2;
		let y2 = this.gui.y+this.gui.guiheight/2;
		//求出角色与怪物中心坐标
		let c = Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
		
		if(c<this.role.rolewidth/2/3+this.gui.guiwidth/2/2){
			
			this.data.state = 'over'
		}
	}
}