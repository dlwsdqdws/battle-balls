export class AcGame {
    constructor(id, AcWingOS) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.AcWingOS = AcWingOS;

        this.settings = new Settings(this); // 用户信息
        this.menu = new AcGameMenu(this); //创建菜单
        this.playground = new AcGamePlayground(this);  //创建一个游戏界面

        this.start();
    }
    start() {
    }
}

