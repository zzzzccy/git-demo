<template>
  <div>
    <div class="app-header">
      <router-link :to="{path: '/'}">
        <p>header</p>
      </router-link>

      <div>
        <ul>
          <li v-for="u in username">{{u.username}}</li>
          <li v-if="username!== ''">|</li>
          <li v-if="username=== ''" @click="Click">登录</li>
        </ul>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">footer</div>
    <Mydialog :is-show="isShowDialog" @on-close="closeDialog">
      <log-form @has-log="onSuccessLog"></log-form>
    </Mydialog>

    <div>servlet-test</div>
    <div>
      <h1>axios基础介绍</h1>
      <button @click="axiosget">get请求</button>
      <button @click="axiospost">post请求</button>
      <button @click="axioshttp">aixos</button>
      <p>{{msg1}}</p>
      <p>{{msg2}}</p>
      <p>{{msg3}}</p>
      <p>{{msg4}}</p>
      <p>{{msg5}}</p>
      <p>{{msg6}}</p>
    </div>
    <div>
      <h1>axios跨域</h1>
      <button @click="getJson">跨域请求json</button>
      <p>{{jsonT1}}</p>
    </div>
  </div>
</template>

<script>
import Dialog from "./dialog";
import LogForm from "./login";

export default {
  components: {
    Mydialog: Dialog,
    LogForm
  },
  data() {
    return {
      isShowDialog: false,
      username: "",
      //        username: []
      msg: [],
      msg1: "",
      msg2: "",
      msg3: "",
      msg4: "",
      msg5: "",
      msg6: "",
      jsonT1: ""
    };
  },
  methods: {
    Click() {
      this.isShowDialog = true;
    },
    closeDialog() {
      this.isShowDialog = false;
    },
    onSuccessLog(data) {
      this.closeDialog();
      this.username = data.data;
      //        console.log(this.username)
    },

    //axios获取本地jsonTest
    axiosget() {
      /*this.$http.get("/api/user").then(res=>{
          this.msg1 = res;
        })*/
      this.$http
        .get("/api/user", {
          params: { name: "asd" },
          headers: {
            token: "jack"
          }
        })
        .then(res => {
          this.msg1 = res.data.data[1].name;
          this.msg2 = res.data.data[1].pwd;
        })
        .catch(function(error) {
          console.log("error:" + error);
        });
    },
    axiospost() {
      this.$http
        .post(
          "/api/user",
          {
            name: "asd"
          },
          {
            headers: {
              token: "tom"
            }
          }
        )
        .then(res => {
          this.msg3 = res.data.data[0].name;
          this.msg4 = res.data.data[0].pwd;
        })
        .catch(function(error) {
          console.log("error" + error);
        });
    },
    axioshttp() {
      //get传参params   post传参data
      this.$http({
        url: "/api/user",
        methods: "post",
        data: {
          name: "asd"
        },
        headers: {
          token: "http-test"
        }
      }).then(res => {
        this.msg5 = res.data.data[0].name;
        this.msg6 = res.data.data[0].pwd;
        console.log(this.msg5);
        console.log(this.msg6);
      });
    },
    getJson() {
      this.$http
        .get("/jT1/JsonT1")
        .then(res => {
          this.jsonT1 = res.data[1].userName;
          console.log(res.data);
        })
        .catch(function(error) {
          console.log("error" + error);
        });
    }
  }
};
</script>

<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
