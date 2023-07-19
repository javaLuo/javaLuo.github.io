<template>
    <div class="box">
        <hr/>
        <canvas class="live-canvas" ref="liveCanvas" />
        <div class="control">
            <button @click="expression('默认')">默认</button>
            <button @click="expression('开心')">开心</button>
            <button @click="expression('忧伤')">忧伤</button>
            <button @click="expression('愤怒')">愤怒</button>
            <button @click="expression('吐舌')">吐舌</button>
        </div>
        <hr/>
    </div>
</template>

<script setup name="Live2d">
    import {ref, onMounted, onBeforeUnmount} from 'vue';
    import * as PIXI from 'pixi.js';
    import { Live2DModel } from 'pixi-live2d-display/cubism4';
    window.PIXI = PIXI;

    let app;
    let model;
    const liveCanvas = ref(null);

    onMounted(async ()=>{
        app = new PIXI.Application({
            view: liveCanvas.value,
            autoStart: true,
            backgroundAlpha: 0,
        });

        model = await Live2DModel.from('./live/狗狗.model3.json');
        // model = await Live2DModel.from('https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/haru/haru_greeter_t03.model3.json');

        app.stage.addChild(model);

        model.scale.set(0.17);
    });

    onBeforeUnmount(()=>{
        model?.destroy();
        app?.destroy();
    });

    function expression(type){
        model.expression(type);
    }
</script>

<style lang="less" scoped>
.box{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .live-canvas{
        width: 300px;
        height: 300px;
        background-color: #ccc;
    }
}

</style>