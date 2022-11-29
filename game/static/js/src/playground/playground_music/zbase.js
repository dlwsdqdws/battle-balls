class GameMusic {
    constructor(playground) {
        this.playground = playground;
        this.$bgm = $(`<audio src="https://app256.acapp.acwing.com.cn/static/audio/ToxicSewers.mp3" autoplay='autoplay' loop='loop'></audio>`);
        this.hide();
        this.playground.$playground.append(this.$bgm);
    }
    show() {
        this.$bgm.show();
    }
    hide() {
        this.$bgm.hide();
    }
    stop() {
        this.$bgm.stop();
    }
}

