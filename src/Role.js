// 角色类
var Roles = (function (_super) {
    function RoleObj() {
        RoleObj.super(this);
        // 初始化
        // this.init();
    }
    // 是否缓存了动画
    RoleObj.cached = false;
    // 注册类
    Laya.class(RoleObj, "RoleObj", _super)

    var _proto = RoleObj.prototype;
    _proto.init = function (_type, _camp, _hp, _speed, _hitRadius) {
        // 角色类型
        this.type = _type;
        // 阵营
        this.camp = _camp;
        // 血量
        this.hp = _hp;
        // 速度
        this.speed = _speed;
        // 被击半径
        this.hitRadius = _hitRadius;
        if (!RoleObj.cached) {
            // 缓存飞机的动作
            // createFrames创建动画模板，多个动画可共享同一份动画模板，而不必每次都创建一份新的，从而节省创建Graphics集合的开销。
            Laya.Animation.createFrames(["comp/hero_fly1.png", "comp/hero_fly2.png"], "hero_fly");
            // 缓存击中爆炸动作
            Laya.Animation.createFrames(["comp/hero_down1.png", "comp/hero_down2.png", "comp/hero_down3.png", "comp/hero_down4.png"], "hero_down");

            // 缓存敌机1飞行动作
            Laya.Animation.createFrames(["comp/enemy1_fly1.png"], "enemy1_fly");
            // 缓存敌机1爆炸动作
            Laya.Animation.createFrames(["comp/enemy1_down1.png", "comp/enemy1_down2.png", "comp/enemy1_down3.png", "comp/enemy1_down4.png"], "enemy1_down");

            // 缓存敌机2飞行动作
            Laya.Animation.createFrames(["comp/enemy2_fly1.png"], "enemy2_fly");
            // 缓存敌机2爆炸动作
            Laya.Animation.createFrames(["comp/enemy2_down1.png", "comp/enemy2_down2.png", "comp/enemy2_down3.png", "comp/enemy2_down4.png"], "enemy2_down");
            // 缓存敌机2碰撞动作
            Laya.Animation.createFrames(["comp/enemy2_hit.png"], "enemy2_hit")

            // 缓存敌机3飞行动作
            Laya.Animation.createFrames(["comp/enemy3_fly1.png", "comp/enemy3_fly2.png"], "enemy3_fly");
            // 缓存敌机3爆炸动作
            Laya.Animation.createFrames(["comp/enemy3_down1.png", "comp/enemy3_down2.png", "comp/enemy3_down3.png", "comp/enemy3_down4.png", "comp/enemy3_down5.png", "comp/enemy3_down6.png"], "enemy3_down");
            // 缓存敌机3碰撞动作
            Laya.Animation.createFrames(["comp/enemy3_hit.png"], "enemy3_hit")

        }
        if (!this.body) {
            // 创建一个动画作为飞机的身体
            this.body = new Laya.Animation();
            // 把机体给添加到容器内
            this.addChild(this.body);
        }
        // 测试其他状态
        this.playAction("hero_fly");
    }
    _proto.playAction = function (action) {
        // 根据类型播放动画
        this.body.play(0, true, this.type + "_" + action);
        // 获取动画大小区域
        this.bound = this.body.getBounds();
        // 设置机身居中
        this.body.pos(-this.bound.width / 2, -this.bound.height / 2);
    }
    return RoleObj;
})(Laya.Sprite);