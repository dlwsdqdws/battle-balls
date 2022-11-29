class GameMap extends AcGameObject {
    constructor(playground) {
        super();
        this.playground = playground;
        this.$canvas = $(`<canvas tabindex=0></canvas>`);
        this.ctx = this.$canvas[0].getContext('2d');  //设置为2d画布
        this.ctx.canvas.width = this.playground.width; //画布宽度
        this.ctx.canvas.height = this.playground.height; ///画布高度
        this.playground.$playground.append(this.$canvas); //加入到playground
    }
    start() { // 只会在第一帧执行一次
        this.$canvas.focus();
    }
	resize() {
        this.ctx.canvas.width = this.playground.width;
        this.ctx.canvas.height = this.playground.height;
        this.ctx.fillStyle = "rgba(0, 0, 0, 1)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    update() {  // 每一帧均会执行一次
        this.render();
    }

    render() {      //渲染画布
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}
