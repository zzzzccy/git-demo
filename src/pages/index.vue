<template>
  <div>
    <h2>全部产品</h2>
    <template v-for="product in productList">
      <h3>{{ product.title }}</h3>
      <ul>
        <li v-for="(item, index) in product.list" :key="index">
          <a :href="item.url">
            {{ item.name }}
          </a>
          <span v-if="item.hot" class="hot-tag">HOT</span>
        </li>
      </ul>
      <br>
    </template>
      <div>
        <h2>最新消息</h2>
        <ul>
          <li v-for="(item, index) in newsList" :key="index">
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
      </div>

      <div class="index-right"></div>
      <div class="index-board-list"></div>
      <div
      class="index-border-item"
      v-for="(item, index) in boardList" :key="index"
      :class="[{'line-last' : index % 2 !==0 }, 'inner-border-' + item.id]">
        <div class="index-board-item-inner">
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <div>
            <a href="">立即购买</a>
          </div>
        </div>
      </div>



  </div>
</template>

<script>

export default {
  data () {
    return {
      boardList: [
        {
          title: '开放产品1',
          description: '开放产品是一款开放产品',
          id: 'car',
          saleout: false
        },
        {
          title: '开放产品2',
          description: '开放产品是一款开放产品',
          id: 'earth',
          saleout: false
        },
        {
          title: '开放产品3',
          id: 'loud',
          description: '开放产品是一款开放产品',
          saleout: false
        },
        {
          title: '开放产品4',
          id: 'mouten',
          description: '开放产品是一款开放产品',
          saleout: false
        }
      ],
      newsList: [
        {
          title: '数据统计',
          url: 'http://starcraft.com'
        },
        {
          title: '数据预测',
          url: 'http://warcraft.com'
        },
        {
          title: '流量统计',
          url: 'http://overwatch.com',
          hot: true
        },
        {
          title: '广告发布',
          url: 'http://hearstone.com'
        }
      ],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'detail/count'
            },
            {
              name: '数据预测',
              url: 'detail/forecast'
            },
            {
              name: '流量统计',
              url: 'detail/analysis',
              hot: true
            },
            {
              name: '广告发布',
              url: 'detail/publish'
            }
          ]
        },
        app: {
          title: '手机应用类',
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com',
              hot: true
            },
            {
              name: '产品助手',
              url: 'http://twitter.com'
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
  .hot-tag {
    background: red;
    color: #fff;
  }
  .index-border-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-right {
    float: left;
    width:900px;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  /* .inner-border-car  .index-board-item-inner {
    background: url('../assets/images/1.png') no-repeat;
  }
  .inner-border-earth  .index-board-item-inner {
    background: url('../assets/images/2.png') no-repeat;
  }
  .inner-border-loud  .index-board-item-inner {
    background: url('../assets/images/3.png') no-repeat;
  }
  .inner-border-mouten  .index-board-item-inner {
    background: url('../assets/images/4.png') no-repeat;
  } */

</style>
