class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            单人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            多人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
            退出
        </div>
    </div>
</div>
`);
        this.$menu.hide();
        this.root.$ac_game.append(this.$menu); //加入菜单
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode'); //单人模式的按钮
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode'); //双人模式的按钮
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings'); //设置按钮

        this.start();
    }
    start() {
        this.add_listening_events();
    }
    add_listening_events() {  //监听函数
        let outer = this;
        this.$single_mode.click(function(){
            outer.hide();
            outer.root.playground.show("single mode");  //显示单人游戏界面
        });
        this.$multi_mode.click(function(){
            outer.hide();
            outer.root.playground.show("multi mode");  //显示多人界面
        });
        this.$settings.click(function(){
            outer.root.settings.logout_on_remote();
        });
    }
    show() {  // 显示menu界面
        this.$menu.show();
    }

    hide() {  // 关闭menu界面
        this.$menu.hide();
    }
}
