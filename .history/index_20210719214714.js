const init = (params) => {
    const {
        type, // 类型： haikang，lecheng
    } = params
    loadscript(type)
    createDOM(params)
}

function loadscript(type) {
    if (type === 'haikang') {
        var oScript = document.createElement("script");
        oScript.src = "http://open.ys7.com/assets/ezuikit_v3.4/ezuikit.js";
        document.body.appendChild(oScript);
    } else if (type === 'lecheng') {
        var oScript = document.createElement("script");
        oScript.type = 'application/javascript';
        oScript.src = "./imouplayer.js"
        document.body.appendChild(oScript);
    }
}

function createDOM(params) {
    const {
        type, // 类型： haikang，lecheng
        url, // 地址
        container, // 容器
        kitToken
    } = params
    const videocontainer = document.getElementById(container)
    if (type === 'haikang') {
        var video = document.createElement("video");
        video.id = 'haikangplayer'
        video.src = url;
        video.style.width = '100%'
        video.controls = 'controls'
        videocontainer.appendChild(video);
        setTimeout(() => {
            new globalThis.EZUIPlayer('haikangplayer')
        }, 1000);
    } else if (type === 'lecheng') {
        setTimeout(() => {
            const player = new globalThis.ImouPlayer(`#${container}`);
            const params = {
                src: [{
                    url: url, // url拼接说明请见：2.2.3 轻应用播放地址说明
                    kitToken: kitToken, // 播放Token，通过接口getKitToken获取，具体请见：2.2.4 getKitToken接口协议说明
                }],
                width: '100%',
                autoplay: true,
                controls: true
            };
            console.log('params', params)
            // 播放器初始化
            player.setup(params);
        }, 1000);
    }
}
export {
    init
}