<template>
  <div class="classify">
    <div class="classify_wrap_1">
      <search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value"></search>
      <div class="classify_menu_1" :style="{'height': Height}">
        <ul>
          <li :key="index" :class="{isSelected: isSelected == item.id}" v-for="(item, index) in menuList"><a @click="handleClickOne(item,index)">{{item.name}}</a></li>
        </ul>
      </div>
      <div class="list_wrap_3" :style="{'height': Height}">
        <div class="banner_1"><img src="../assets/img/banner_1.jpg"></div>

        <h2 class="list_title_2">热卖品类</h2>
        <div class="weui-row weui-no-gutter list_box_3">
          <div :key="index" v-for="(item, index) in goods.c1" class="weui-col-33 list_cell_3">
            <div class="list_innerCell_2">
              <router-link to="/" class="pro_img_2">
                <img src="../assets/img/product_img_9.png">
              </router-link>
              <router-link to="/" class="txt_cell_3">
                <h3>IMac</h3>
              </router-link>
            </div>
          </div>
        </div>

        <h2 class="list_title_2">特惠品类</h2>
        <div class="weui-row weui-no-gutter list_box_3">
          <div :key="index" v-for="(item, index) in goods.c2" class="weui-col-33 list_cell_3">
            <div class="list_innerCell_2">
              <router-link to="/" class="pro_img_2">
                <img src="../assets/img/product_img_9.png">
              </router-link>
              <router-link to="/" class="txt_cell_3">
                <h3>IMac</h3>
              </router-link>
            </div>
          </div>
        </div>

        <h2 class="list_title_2">京东特卖</h2>
        <div class="weui-row weui-no-gutter list_box_3">
          <div :key="index" v-for="(item, index) in goods.c3" class="weui-col-33 list_cell_3">
            <div class="list_innerCell_2">
              <router-link to="/" class="pro_img_2">
                <img src="../assets/img/product_img_9.png">
              </router-link>
              <router-link to="/" class="txt_cell_3">
                <h3>IMac</h3>
              </router-link>
            </div>
          </div>
        </div>



      </div>
    </div>
    <!--<loading v-model="load" text="加载中"></loading>-->
  </div>
</template>
<script>
  import {
    Search,
    Tabbar,
    TabbarItem,
    Loading
  } from 'vux'
  export default {
    data() {
      return {
        load: true,
        value: "",
        results: [],
        sort: [],
        father: [],
        child: [],
        click: [],
        Height: '',
        isSelected: 1,
        goodsList: [{
          id: 1,
          c1: [1, 2, 3, 4, 5, 6],
          c2: [1, 2, 3, 4, 5, 6],
          c3: [1, 2, 3, 4, 5, 6]
        }, {
          id: 2,
          c1: [1, 2, 3, 4, 5, 6, 7],
          c2: [1, 2, 3, 4, 5, 6, 7],
          c3: [1, 2, 3, 4, 5]
        }],
        goods: [],
        menuList: [{
            id: 1,
            name: '推荐分类'
          },
          {
            id: 2,
            name: '京东超市'
          },
          {
            id: 3,
            name: '国际名牌'
          },
          {
            id: 4,
            name: '奢侈品'
          },
          {
            id: 5,
            name: '全球购'
          },
          {
            id: 6,
            name: '男装'
          },
          {
            id: 7,
            name: '女装'
          },
          {
            id: 8,
            name: '男鞋'
          },
          {
            id: 9,
            name: '女鞋'
          },
          {
            id: 10,
            name: '内衣配饰'
          },
          {
            id: 11,
            name: '箱包手袋'
          },
          {
            id: 12,
            name: '美妆个护'
          },
          {
            id: 13,
            name: '酒水饮料'
          }, {
            id: 14,
            name: '运动户外'
          }, {
            id: 15,
            name: '汽车用品'
          }
        ]
      }
    },
    components: {
      Search,
      Tabbar,
      TabbarItem,
      Loading
    },
    mounted() {
      this.goods = this.goodsList[0]
      localStorage.removeItem("goodname")
      document.title = "分类"
      this.Height = (document.body.offsetHeight - 94) + 'px'
    },
    methods: {
      handleClickOne(item, index) {
        this.isSelected = item.id
        if (this.goodsList.find(_item => _item.id == item.id)) {
          this.goods = this.goodsList.find(_item => _item.id == item.id);
        }
      },
      resultClick(item) {
        localStorage.setItem("goodname", this.value)
        window.location.href = "/list"
      },
      getResult(val) {
        this.results = val ? getResult(val) : []
      },

    }
  }

  function getResult(val) {
    let rs = []
    for (let i = 0; i < 1; i++) {
      rs.push({
        title: `${val}`,
        other: i
      })
    }
    return rs
  }
</script>
<style lang="less" scoped>
  .classify {
    background-color: #f3f5f7;
    height: 100%;

    .classify_menu_1 {
      float: left;
      overflow-y: scroll;
      background-color: #fff;
      margin-right: 10px;
      border-bottom: 1px solid #f3f5f7;
      .isSelected {
        background: #f3f5f7;
        color: red;
      }
    }

    .classify_menu_1 li {
      font-size: .8em;
    }

    .classify_menu_1 a {
      display: block;
      width: 80px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-top: 1px solid #f3f5f7;
      border-right: 1px solid #f3f5f7;
    }

    .classify_menu_1 .classify_active {
      display: block;
      color: #dd2727;
      font-weight: bold;
      padding: 12px 12px;
      border-top: 1px solid #ebebeb;
      border-right: 1px solid #ebebeb;
      background-color: #ebebeb;
    }

    .list_wrap_3 {
      overflow-y: scroll;
      margin-right: 10px;
    }

    .list_box_3 {
      overflow: hidden;
      margin-bottom: .8em;
      background-color: #fff;
    }

    .list_title_2 {
      font-size: 12px;
      font-weight: 100;
      color: #000;
      padding: 0 0 .5em 0;
    }

    .list_innerCell_2 {
      overflow: hidden;
      padding: 10px;
    }

    .pro_img_2 {
      overflow: hidden;
      display: block;
    }

    .pro_img_2 img {
      width: 100%;
    }

    .txt_cell_3 {
      text-align: center;
      display: block;
      height: 18px;
      overflow: hidden;
      margin-top: 5px;
    }

    .txt_cell_3 h3 {
      text-align: center;
      display: block;
      font-size: 15px;
      font-weight: 100;
      color: #222222;
    }
    .banner_1 {
      margin-top: 10px;
      margin-bottom: .8em;
    }
    .banner_1 img {
      width: 100%;

      vertical-align: bottom;
    }

    .weui-col-33 {
      width: 32%;
      float: left;
    }

    .list_cell_3 {
      overflow: hidden;
    }

    .xuanzhong {
      background: #ebebeb;
      color: #dd2727
    }
  }
</style>