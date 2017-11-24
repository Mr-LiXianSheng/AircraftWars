var Game = (function () {
    (function Game() {
        // 初始化引擎，设置游戏高度
        Laya.init(400, 852);
        // 创建循环滚动的背景
        this.bg = new BackGround();
        // 把背景添加到舞台上显示
        Laya.stage.addChild(this.bg);
        // 加载图集资源
        Laya.loader.load("res/atlas/comp.json", Laya.Handler.create(this, onLoaded), null, Laya.Loader.ATLAS);
    })();
    function onLoaded() {
        // 创建一个主角(主战斗机)
        this.hero = new Roles();
        // 初始化角色
        this.init("hero", 0, 1, 0, 30);
        // 设置主角的位置
        this.hero.pos(200, 500);
        // 添加到舞台
        Laya.stage.addChild(this.hero);
        // 监听舞台的鼠标移动事件
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, onMouseMove);
        // 创建敌人
        createEnemy(10);
    }
    function onMouseMove() {
        // 始终保持主角和鼠标位置一致
        this.hero.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    }
    function createEnemy(){
        
    }
})();


