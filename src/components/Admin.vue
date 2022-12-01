<template>
  <div class="hello">
    <div
      v-show="logged"
      class="ui segment container"
    >
      <div class="ui list">
        <div class="item">
          <a
            v-show="edit"
            class="ui green button"
            @click="edit = false; save()"
          >
            <i class="save icon" />存檔!
          </a>
          <a
            v-show="!edit"
            class="ui green button"
            @click="edit = true"
          >
            <i class="edit icon" />編輯!
          </a>
        </div>
        <div
          v-for="(k, idx) in r(docs)"
          :key="idx"
          class="item"
        >
          <h3>
            <a
              v-show="!k.edit"
              :href="k.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ k.date }}: {{ k.title }}
            </a>
            <form
              v-show="edit"
              class="ui form"
            >
              <div class="ui field">
                <div class="ui labeled input">
                  <input
                    v-model="k.date"
                    type="text"
                    placeholder="日期"
                  >
                </div>
                <div class="ui labeled input">
                  <input
                    v-model="k.title"
                    type="text"
                    placeholder="標題"
                  >
                </div>
                <div class="ui labeled input">
                  <input
                    v-model="k.href"
                    type="text"
                    placeholder="網址"
                  >
                </div>
              </div>
            </form>
          </h3>
        </div>
        <div class="item">
          <a
            v-show="edit"
            class="ui green button"
            @click="edit = false; save()"
          >
            <i class="save icon" />存檔!
          </a>
          <a
            v-show="!edit"
            class="ui green button"
            @click="edit = true"
          >
            <i class="edit icon" />編輯!
          </a>
        </div>
      </div>
      <form class="ui form" v-show="!edit">
        <div class="field">
          <div class="ui labeled input">
            <input
              v-model="date"
              type="text"
              placeholder="日期"
            >
          </div>
          <div class="ui labeled input">
            <input
              v-model="title"
              type="text"
              placeholder="標題"
            >
          </div>
          <div class="ui labeled input">
            <input
              v-model="href"
              type="text"
              placeholder="網址"
            >
          </div>    
        </div>
        <a
          class="ui green big button"
          @click="submit()"
        >
          登錄新資料!
        </a>
      </form>
    </div>
    <form
      v-show="!logged"
      class="ui form container"
    >
      <div class="ui left icon input">
        <input
          v-model="email"
          type="text"
          placeholder="帳號"
        >
        <i class="user icon" />
      </div>
      <br>
      <div class="ui left icon input">
        <input
          v-model="password"
          type="password"
          placeholder="密碼"
        >
        <i class="lock icon" />
      </div>
      <br>
      <br>
      <div
        id="r"
        class="ui checkbox"
      >
        <input
          v-model="remember"
          type="checkbox"
          name="example"
        >
        <label>記住我</label>
      </div>
      <br>
      <br>
      <a
        class="ui huge blue button"
        @click="tryLogin()"
      >
        登入
      </a>
    </form>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase.js'
import { ref, set, onValue } from 'firebase/database'

export default {
  name: 'EPaper',
  metaInfo: {
    title: '管理員',
  },
  data: () => ({
    edit: false,
    try: 0,
    href: '',
    title: '',
    date: '',
    email: '',
    password: '',
    docs: [],
    logged: false,
    user: null,
    remember: false
  }),
  watch: {
    remember (newR) {
      localStorage.remember = newR
      if (!newR) {
        localStorage.email = ''
        localStorage.password = ''
      }
    }
  },
  mounted () {
    const vm = this
    onValue(ref(db, 'docs'), (snapshot) => {
      const data = snapshot.val()
      vm.docs = data
    })
    if (localStorage.email) {
      vm.email = localStorage.email
    }
    if (localStorage.password) {
      vm.password = localStorage.password
      vm.remember = true
    }
  },
  methods: {
    save () {
      var ans = [ ...this.docs]
      set(ref(db, 'docs'), ans).then(() => {
        console.log('docs updated!')
      })
    },
    r (list) {
      var ans = [...list]
      ans.sort(function (a, b) {
        return (new Date(b.date).getTime() - new Date(a.date).getTime())
      })
      return ans
    },
    submit () {
      var ans = [ ...this.docs]
      ans.push({
        title: this.title,
        date: this.date,
        href: this.href,
        time: new Date().getTime()
      })
      set(ref(db, 'docs'), ans).then(() => {
        console.log('docs updated!')
      })
      this.title = ''
      this.date = ''
      this.href = ''
    },
    /* register () {
      const vm = this
      createUserWithEmailAndPassword(auth, vm.email, vm.password).then((data) => {
        // console.log(data.user)
        vm.createAccount(data.user.uid, vm.email)
        vm.a = 'Login'
        // this.$router.push('/')
      })
        .catch(error => {
          console.log(error.message)
        })
    },
    createAccount (uid, email) {
      set(ref(db, 'users/' + uid),
        {
          id: uid,
          email: email,
          createTime: new Date().getTime()
        }).then(() => {
        console.log('user created!')
      })
    }, */
    tryLogin () {
      if (this.try < 3) {
        console.log('try to login as:' + (this.email || this.email))
        this.try++
        const vm = this
        signInWithEmailAndPassword(auth, this.email || this.email, this.password)
          .then((data) => {
            vm.logged = true
            vm.user = data.user
            window.alert('您已成功登入')
          })
          .catch(error => {
            console.log(error.message)
          })
        if (this.remember) {
          localStorage.email = this.email
          localStorage.password = this.password
        }
      } else {
        window.alert('密碼輸入錯誤超過三次，請重新登入')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #right {
    margin-left: 3em;
  }

  img.small {
    width: 60px !important;
    max-width: 50%;
    border-radius: 5px;
  }

  img.ui.avatar {
    width: 50px;
    border-radius: 25px;
  }

</style>
