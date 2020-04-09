<template>
  <div>测试</div>
</template>
<script>
export default {
    data(){
        return{
            path:"wss://api.kk.w293.cn/socket",
            socket:""
        }
    },
    methods:{
        init:function(){
            if(typeof(WebSocket) === "undefined"){
                alert("您的浏览器不支持socket")
            }else{
                // 实例化socket
                this.socket = new WebSocket(this.path)
                // 监听socket连接
                this.socket.onopen = this.open
                // 监听socket错误信息
                this.socket.onerror = this.error
                // 监听socket消息
                this.socket.onmessage = this.getMessage
            }
        },
        open:function(){
            console.log("socket连接成功")
            //连接建立时触发
        },
        error:function(){
            console.log("连接错误")
            //通信发生错误时触发
        },
        getMessage:function(msg){
            console.log(msg.data)
            //客户端接收服务端数据时触发
        },
        send:function(){
            this.socket.send("发送信息")
        },
        close:function(){
            console.log("socket已经关闭")
            //连接关闭时触发
        }
    },
    created(){
        this.init()
        console.log(this.$store.state.uid)
        this.$store.commit('setUid', 2);
        console.log(this.$store.state.uid)
    },
    mounted(){
        
    }
};
</script>