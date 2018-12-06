<template>
  <div>
    <div class="detail-wrap">
      <div class="detail-left">
        <img :src="imageMap[$route.path]">
        <ul>
          <!--<router-link v-for="item in products" :to="{ path: item.path }" tag="li" active-class="active">
            {{ item.name }}
          </router-link>-->
        </ul>
      </div>
      <div class="detail-right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        products: [
          {
            name: '数据统计',
            path: 'count',
            icon: "../assets/images/1.png",
            active: false
          },
          {
            name: '数据预测',
            path: 'forecast',
            active: false
          },
          {
            name: '流量统计',
            path: 'analysis',
            active: false
          },
          {
            name: '广告发布',
            path: 'publish',
            active: false
          }
        ],
        imageMap: {
          '/detail/count': require("../assets/images/1.png"),
          '/detail/forecast': require("../assets/images/2.png"),
          '/detail/analysis': require("../assets/images/3.png"),
          '/detail/publish': require("../assets/images/4.png"),
        }
      }
    },
    computed: {
      productIcon() {
        return this.imageMap[this.$route.path]
      }
    }
  }
</script>

<style>
  .detail-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .detail-left {
    float: left;
    width: 200px;
    text-align: center;
  }

  .detail-right {
    float: left;
    width: 980px;
    margin-left: 20px;
  }

</style scoped>
