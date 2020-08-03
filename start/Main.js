class Main {
	constructor() {
		this.canvas = document.getElementById('mycanvas');
		this.ctx = this.canvas.getContext('2d');
		this.imgbegin = document.getElementById('begin')

		this.data = new Data();
		this.bg = new Bg(this.canvas, this.ctx, this.data);
		this.role = new Role(this.canvas, this.ctx, this.data, this.bg);
		this.eat = new Eat(this.canvas, this.ctx, this.data)
		this.gui = new Gui(this.canvas, this.data, this.ctx)
		this.grade = new Grade(this.canvas, this.ctx, this.role, this.eat, this.data)
		this.director = new Director(this.canvas, this.ctx, this.role, this.gui, this.data)
	}
	begin() {


		setInterval(() => {
			if (this.data.state == 'begin') {
				this.ctx.drawImage(this.imgbegin,200,150,500,200)
				this.canvas.onmousedown = () => {
					if (this.data.state == 'begin') {
						this.data.state = 'go'
						
					}
				}
			} else if (this.data.state == 'go') {
				//清空
				this.ctx.clearRect(0, 0, this, this.canvas.width, this.canvas.height)
				//绘制
				this.draw();

				//修改
				this.update();
			} else if (this.data.state == 'over') {
				this.director.draw();
			}
		}, 100)


	}
	draw() {

		this.bg.draw(); //绘制背景
		this.role.draw(); //绘制角色
		this.eat.draw(); //绘制金币
		this.gui.draw(); //绘制怪物
		this.grade.draw(); //绘制分,绘制距离
	}
	update() {
		this.bg.update(); //修改背景
		this.role.update(); //修改角色
		this.eat.update(); //修改金币
		this.gui.update(); //修改怪物
		this.grade.update(); //修改分数,修改坐标
		this.director.update(); //结束
	}


	init() {
		//设置监听器
		this.setListener();
	}
	setListener() {

	}


}
