let AC_GAME_OBJECTS = [];

class AcGameObject{
    constructor() {
        AC_GAME_OBJECTS.push(this);

        this.has_called_start = false;  // 是否执行过start函数
        this.timedelta = 0;  // 当前帧距离上一帧的时间间隔
        this.uuid = this.create_uuid();
    }

    create_uuid() {
        let res = "";
        for (let i = 0; i < 8; i ++ ) {
            let x = parseInt(Math.floor(Math.random() * 10));  // 返回[0, 1)之间的数
            res += x;
        }
        return res;
    }

    start() {   // 只会在第一帧执行一次
    }

    update() { // 每一帧均会执行一次
    }

    on_destroy() { // 在被销毁前执行一次
    }

    late_update() {  // 在每一帧的最后执行一次
    }

    destroy() {
        this.on_destroy();

        for(let i = 0; i < AC_GAME_OBJECTS.length; i++ ) {
            if(AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp; //上一帧的时间间隔
let AC_GAME_ANIMATION = function(timestamp) {
    for (let i = 0; i < AC_GAME_OBJECTS.length; i ++ ){
        let obj = AC_GAME_OBJECTS[i];
        if (!obj.has_called_start) {  //没有执行第一帧
            obj.start();
            obj.has_called_start = true;
        }else{  //已执行过第一帧
            obj.timedelta = timestamp - last_timestamp;  //与上一帧的时间间隔
            obj.update();
        }
    }

    for (let i = 0; i < AC_GAME_OBJECTS.length; i ++ ) {
        let obj = AC_GAME_OBJECTS[i];
        obj.late_update();
    }

    last_timestamp = timestamp;

    requestAnimationFrame(AC_GAME_ANIMATION);
}

requestAnimationFrame(AC_GAME_ANIMATION);
