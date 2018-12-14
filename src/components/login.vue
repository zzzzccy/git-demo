<template>
  <div>
    <div>
      <span>用户名：</span>
      <div>
        <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        <span class="form-error">{{ userErrors.errorText }}</span>
      </div>
    </div>
    <div>
      <span>密码：</span>
      <div>
        <input type="text" v-model="passwordModel" placeholder="请输入密码">
        <span class="form-error">{{ passwordErrors.errorText }}</span>
      </div>
    </div>
    <div>
      <a @click="onLogin">登录</a>
    </div>
    <p> {{ errorText }} </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: {
      userErrors() {
        let errorText, status                           //ES6声明局部变量
        if (!/@/g.test(this.usernameModel)) {           //正则表达式验证是否包含@
          status = false
          errorText = '不包含@'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.userFlag) {
          errorText = ''
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors() {
        let errorText, status                           //ES6声明局部变量
        if (!/^\w{1,6}$/g.test(this.passwordModel)) {           //正则表达式验证
          status = false
          errorText = '密码不是1-6位'
        }
        else {
          status = true
          errorText = ''
        }
        if (!this.passwordFlag) {
          errorText = ''
          this.passwordFlag = true
        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin() {
        if (!this.userErrors.status || !this.passwordErrors.status) {
          this.errorText = '用户名或密码错误'
        }
        else {
          this.errorText = ''
          this.$http.get('api/login')
            .then((response) => {
              sessionStorage.username = this.usernameModel;
              this.$emit('has-log', response.body)
              console.log(response.body)
            }, (error) => {
              console.log(error)
            })
        }
      }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
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

  .form-error {
    color: red;
    padding-left: 15px;
  }
</style>
