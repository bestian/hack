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
          v-for="(k, idx) in r(news)"
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
              {{ k.date }}:
              <vue-simple-markdown :source="$t(k.md)"></vue-simple-markdown>
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
                    v-model="k.md"
                    type="text"
                    placeholder="標題"
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
              v-model="md"
              type="text"
              placeholder="標題"
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
  </div>
</template>

<script>
import { db } from '../db.js'
import { ref, set} from 'firebase/database'

export default {
  name: 'EPaper',
  props: ['logged', 'news'],
  metaInfo: {
    title: '管理員',
  },
  data: () => ({
    edit: false,
    try: 0,
    href: '',
    md: '',
    date: '',
    email: '',
    password: '',
    user: null
  }),
  mounted () {
  },
  methods: {
    save () {
      var ans = [ ...this.news]
      set(ref(db, 'news'), ans).then(() => {
        console.log('news updated!')
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
      var ans = [ ...this.news]
      ans.push({
        md: this.md,
        date: this.date,
        type: 'log',
        time: new Date().getTime()
      })
      set(ref(db, 'news'), ans).then(() => {
        console.log('news updated!')
      })
      this.md = ''
      this.date = ''
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
