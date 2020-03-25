var vm = new Vue({
    el: '#app',
    data: {
        clientWidth: document.body.clientWidth,// 当前视窗宽度
        transform: "transform:translate(0,0)",//背景图片移动距离
        pageNum: 1,// 当前页码
        isPlay: true,// 背景音乐播放状态
    },
    methods: {
        next() {
            if(this.pageNum==1){
                this.transform = `transform:translate(${this.clientWidth},0)`;
                this.pageNum++
            }
        },
        audiosCtrl(){
            console.log(123)
            var audio = document.querySelector("audio");
            if(this.isPlay){
                audio.pause()
            }else{
                audio.play()
            }
            this.isPlay = !this.isPlay;
        }
    },
    mounted() {
        
        console.log(document.body.clientWidth);
    },
    created(){
        if (this.clientWidth >= 750) {
            document.documentElement.style.fontSize = "100px";
        } else {
            document.documentElement.style.fontSize = `${100*(this.clientWidth/750)}px`;
        }
    }
})