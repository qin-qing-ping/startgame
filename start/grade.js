class Grade {
	constructor(canvas, ctx, role, eat, data) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.role = role;
		this.eat = eat;
		this.data = data;
		this.score = 0; //分数
		this.x = canvas.width / 2-50; //分数在屏幕位置
		this.y =  role.roleheight+10;
	}
	draw() {
		
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.font = "40px sans-serif";
		this.ctx.fillStyle = "yellow";
		this.ctx.fillText(this.score + "金币", this.x, this.y);
		this.ctx.restore();

	}
	update() {
		//判断星星与角色是否碰撞在一起
	
		let moneyArray = this.eat.moneyArray;
		let money= null;
		for (let i = 0; i < moneyArray.length; i++) {
			money = moneyArray[i];
			//money.x, money.y
			let jx = this.role.x + this.role.rolewidth / 2/3;
			let jy = this.role.y + this.role.roleheight / 2/3;
			let c = Math.sqrt((jx - money.x) * (jx - money.x) + (jy - money.y) * (jy - money.y));
			if (c < this.eat.imgwidth/2 + this.role.rolewidth / 2) {
				this.score++;
				money.x = this.canvas.width + this.eat.imgwidth;
				money.y = Math.random() * this.data.lineheight - 30;
			}
		}

	}
}
