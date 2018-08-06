<template>
    <div >
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item><img src="http://www.liulongbin.top:3005/images/lunbo1-min.jpg" alt=""></mt-swipe-item> -->
            <mt-swipe-item><img src="https://wx2.sinaimg.cn/large/005zWjpngy1ftzxx7yu47j30y50lcaej.jpg" alt=""></mt-swipe-item>
            <!-- <mt-swipe-item><img src="http://www.liulongbin.top:3005/images/lunbo2-min.jpg" alt=""></mt-swipe-item> -->
            <mt-swipe-item><img src="https://files.catbox.moe/8x4k6a.jpg" alt=""></mt-swipe-item>
            <!-- <mt-swipe-item><img src="http://www.liulongbin.top:3005/images/lunbo3-min.jpg" alt=""></mt-swipe-item> -->
            <mt-swipe-item><img src="https://i.loli.net/2018/08/06/5b67e3dfcbb9e.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item v-for="item in swipeList" :key="item.id"><img :src="item.img" alt=""></mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9 " id="ul">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="new/newList">
		                    <img src="../../assets/images/menu1.png" alt="">
		                    <div class="mui-media-body">Home</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../assets/images/menu2.png" alt="">
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu3.png" alt="">
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu4.png" alt="">
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu5.png" alt="">
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/images/menu6.png" alt="">
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
		</div>
    </div>    
</template>
<script>
//    import axios from "axios"
    export default   {
        data () {
            return {
                swipeList:[]
            }
        },
        methods: {
            
        },
        created () {
            this.axios.get('http://www.liulongbin.top:3005/api/getlunbo').then(res=>{
                if (res.status === 200) {
                    console.log(res);
                    
                    this.swipeList = res.data.message
                }
            })
        }   
    }
    
</script>
<style scoped>
.mint-swipe {
    height: 48vw;
    background-color: red;
}
img {
    width: 100%;
    height: 100%;
    border: 0;
}
#ul {
    background-color: #fff;
    margin-top:0;
}
#ul li{
    border-right: 0;
    border-bottom: 0;
    text-align: center;
    width: 33.33%;
    
}
#ul img {
    width: 60px;
    border: 0;
}
</style>

