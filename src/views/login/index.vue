<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" label-position="left">
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input 
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
        </el-form-item>
        <el-tooltip v-model="capsTooltip" content="Caps lock is on" placement="right" manual>
          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              autocomplete="on"
              @blur="capsTooltip = false"
              @keyup.native="checkCapslock"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
            </span>
          </el-form-item>
        </el-tooltip>
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click="handleLogin">Login</el-button>
    </el-form>
    <div class="container">
      <div class="register-box" :class="isLogin ? 'silde-up' : ''">
        <h2 class="register-title" @click="isLogin = false">
          <span>没有账号，去</span>注册
        </h2>
        <div class="input-box">
          <input type="text" placeholder="用户名">
          <input type="password" placeholder="密码">
          <input type="password" placeholder="确认密码">
        </div>
        <button>注册</button>
      </div>
      <div class="login-box" :class="isLogin ? '' : 'silde-up'">
        <div class="center">
          <h2 class="login-title" @click="isLogin = true">
            <span>已有账号，去</span>登录
          </h2>
          <div class="input-box">
            <input type="text" placeholder="用户名">
            <input type="password" placeholder="密码" @keyup.enter.native="handleLogin">  
          </div>
          <button @click="handleLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      isLogin: true,
      loginForm: {
        username: 'admin',
        password: '111111',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          console.log('login')
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery})
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  display: none;
}
.login-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #006aff30;
  background-color: #ccc;
}
.container {
  /* background: skyblue; */
  /* border: 1px solid red; */
  background-color: #006aff;
  width: 350px;
  height: 550px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}
.container::after {
  content: "";
  position: absolute;
  /* top bottom left right 都为0 */
  inset: 0;
  background: #ccc;
  opacity: 0.8;
}
// .login-box,
.register-box {
  // display: none;
  width: 70%;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.3s ease;
}
.login-title,
.register-title {
  color: #fff;
  font-size: 27px;
  text-align: center;
}
.login-title span,
.register-title span {
  color: rgba(0, 0, 0, 0.4);
  display: none;
}
.login-box .input-box,
.register-box .input-box {
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 50px;
  opacity: 1;
  visibility: visible;
  transition: 0.6s ease;
  input {
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 12px;
    padding: 8px 0;
    text-indent: 15px;
    outline: none;
  }
  input:last-child {
    border-bottom: none
  }
  input::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
}
.login-box button,
.register-box button {
  width: 100%;
  margin-top: 15px;
  padding: 15px 45px;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: bold;
  visibility: visible;
  opacity: 1;
  transition: 0.3s ease;
  &:hover{
    background-color: rgba(0, 0, 0, 0.8);
  }
}
// 登录区域
.login-box {
  // display: none;
  position: absolute;
  inset: 0;
  top: 20%;
  z-index: 2;
  background-color: #fff;
  transition: 0.3s ease;
}
.login-box::before {
  content: "";
  background-color: #fff;
  width: 200%;
  height: 250px;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}
.login-box .center {
  width: 70%;
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
.login-title{
  color: #000
}
.login-box .input-box{
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.login-box button {
  background-color: #006aff80;
}
.login-box.silde-up {
  top: 90%;
}
.login-box.silde-up .center {
  top: 10%;
  transform: translate(-50%, 0%);
}
.register-box.silde-up .register-title,
.login-box.silde-up .login-title {
  font-size: 16px;
  cursor: pointer;
}
.register-box.silde-up .register-title span,
.login-box.silde-up .login-title span {
  display: inline-block;
  margin-right: 5px;
}
.register-box.silde-up {
  top: 6%;
  transform: translate(-50%, 0);
}
.slide-up .input-box,
.slide-up button {
  opacity: 0;
  visibility: hidden;
}
 </style>