class Eat {
	constructor(canvas, ctx, data) {

		this.canvas = canvas;
		this.ctx = ctx;
		this.data = data;
		this.moneyArray = [];
		this.img = document.getElementById('money')
		this.init();
		this.imgwidth = 25;
		this.imgheight = 35;

	}
	init() {
		let money = null;
		for (let i = 0; i <= 8; i++) {
			money = {
				x: Math.random() * this.canvas.width,
				y: Math.random() * this.canvas.height - 200
			}
			this.moneyArray.push(money);
		}
	}
	draw() {
		let money = null
		for (let i = 0; i < this.moneyArray.length; i++) {
			money = this.moneyArray[i];

			this.ctx.drawImage(this.img, money.x, money.y, this.imgwidth, this.imgheight)
		}



	}
	update() {
		let money = null;
		for (let i = 0; i < this.moneyArray.length; i++) {
			money = this.moneyArray[i];
			money.x = money.x - this.data.movespeed +3;
			if (money.x < -this.img.width) {
				money.x = this.canvas.width + this.imgwidth;
				money.y = Math.random() * this.data.lineheight - 50;
			}
		}
	}
}
