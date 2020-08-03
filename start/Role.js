class Role {
	constructor(canvas, ctx, data, bg) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.data = data;
		this.bg = bg;
		this.roleplace = 'cango'; //当人物移动到边上时  cango表示可以移动  cantgo表示不能再移动
		this.img = document.getElementById('role')

		this.hang = 2;
		this.lie = 2;
		this.i = 0;
		this.j = 0;
		this.rolewidth = this.img.width / this.lie / 3
		this.roleheight = this.img.height / this.hang / 3
		this.x = this.canvas.width / 2 - this.rolewidth;
		this.y = this.data.lineheight - this.roleheight;
		this.width = this.img.width / this.lie / 3;
		this.height = this.img.height / this.hang / 3;
		this.CurrentSpeed = 70; //最开始速度
		this.jumpCurrentSpeed = this.CurrentSpeed; //跳起来后的速度
		this.a = 15;
		this.state = 'bottom';

	}
	draw() {
		this.drawImageTool(this.ctx, this.img, this.lie, this.hang, this.i, this.j, this.x, this.y)
	}
	
	update() {
		this.j++;
		
		if (this.j == 2) {
			this.j = 0;
		}
		window.onkeydown = (e) => {
			
			

			if (e.key == 'ArrowLeft') {
				// this.bg.bgmove = 'moveleft';
				this.i = 1;
				this.j++;

				if (this.j == 2) {
					this.j = 0;
				}
			} else if (e.key == 'ArrowRight') {
				// this.bg.bgmove = 'moveright';
				this.i = 0;
				this.j++;

				if (this.j == 2) {
					this.j = 0;
				}
			} else if(e.key == 'ArrowUp'){
				
				if(this.state =='bottom'){
				this.state ='up';
			}
			}
		}
		window.onkeyup = (e) => {
			// this.bg.bgmove = 'up';
			this.j = 0;
		
		}
		//跳起来
		if (this.state == "up") {
			
			this.y = this.y - this.jumpCurrentSpeed;
			this.jumpCurrentSpeed = this.jumpCurrentSpeed - this.a;
			if (this.y >= this.data.lineheight - this.roleheight) {
				this.state = "bottom";
				this.jumpCurrentSpeed = this.CurrentSpeed;
				this.y = this.data.lineheight - this.roleheight;
			}
		}


	
	


}
drawImageTool(ctx, img, lie, hang, i, j, x, y) {
	ctx.drawImage(img,
		img.width / lie * j, img.height / hang * i,
		img.width / lie, img.height / hang,
		x, y, img.width / lie / 3, img.height / hang / 3);
}

}
