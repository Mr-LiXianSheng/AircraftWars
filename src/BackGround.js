// 循环滚动的游戏背景
var BackGround = (function (_super) {
    function BackGroundObj() {
        BackGroundObj.super(this);
        // 创建游戏背景1
        this.bg1 = new Laya.Sprite(); // 类用于创建节点对象，节点是最基本的元素。
        //加载并显示背景图
        this.bg1.loadImage("comp/background.png");
        // 把背景1放在容器中
        this.addChild(this.bg1);

        // 创建游戏背景2
        this.bg2 = new Laya.Sprite(); // 类用于创建节点对象，节点是最基本的元素。
        //加载并显示背景图
        this.bg2.loadImage("comp/background.png");
        // 改变背景图位置,放在背景1的上面
        this.bg2.pos(0, -852);
        // 把背景1放在容器中
        this.addChild(this.bg2);

        // 创建一个帧循环，更新容器位置
        Laya.timer.frameLoop(1, this, this.onLoop);

    }
    // 注册类
    Laya.class(BackGroundObj, "BackGroundObj", _super);

    var _proto = BackGroundObj.prototype;
    _proto.onLoop = function () {
        // 背景容器每帧向下移动一像素
        this.y += 1;
        // 如果背景图到了下面不可见的位置，立即调整位置到最上边
        if (this.bg1.y + this.y >= 852) {
            this.bg1.y -= 852 * 2;
        }
        if (this.bg2.y + this.y >= 852) {
            this.bg2.y -= 852 * 2;
        }
    }

    return BackGroundObj;
})(Laya.Sprite);