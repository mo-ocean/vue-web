<template>
  <div>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media"  v-for="item in newList" :key="item.id">
            <router-link :to=" '/new/newInfo/' + item.id" class="" >
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    {{item.title}}
                    <p class="mui-ellipsis">
                        <span>发表时间：{{item.add_time | fmtTime('YYYY-MM-DD hh:mm:ss')}}</span>
                        <span>点击次数：{{item.click}}</span>
                    </p>
                </div>
            </router-link>
        </li>
	</ul>
  </div>
</template>

<script>
export default {

  data () {
    return {
        newList:[]
    }
  },

  methods: {
     
  },

  created () {
      this.axios.get(`/api/getnewslist`).then(res => {
          if (res.status === 200) {
              this.newList=res.data.message
          }
      })
  }
}
</script>

<style scoped>
.mui-media-body {
    font-weight: 700;
    color: #000;
    font-size: 14px;
}
.mui-ellipsis {
    font-size: 14px;
    font-weight: 200;
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
}
</style>
