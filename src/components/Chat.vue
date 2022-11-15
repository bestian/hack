<template lang="pug">
  .chats
    .ui.left.aligned.segment.container(:class="{dark: dark}")
      div.fluid
        sui-header(size="large") {{ msg }}
        router-link(to="/")
          img.logo(src="../assets/logo.png")
      .ui.comments
        h3.ui.dividing.header 歡迎留言
        .comment(v-for="(c, idx, order) in chats", :key="c.time")
          a.avatar
            i.user.icon
          .content(:class = "bgColors[order % 4]")
            a.author(:href="'mailto:' + c.email", target="_blank")   {{ c.n }} 說：
            vue-simple-markdown.text(:source="c.t")
              .metadata
                span.date -{{ parseTime(c.time) }}
      .ui.form.light-blue
        .two.fields
          .required.field
            label 您的大名:
            input(type='text' v-model="myName")
          .required.field
            label 請留言:
            input(type='text' v-model="myText" placeholder="您想說什麼？")
        .ui.submit.huge.green.button(@click="submit(myName, email, myText)") 留言
      br
      br

</template>
<script>

export default {
  name: 'ChAt',
  props: ['likes', 'chats', 'dark', 'email'],
  metaInfo: {
    title: '留言版',
  },
  data() {
    return {
      msg: '留言版',
      myName: '訪客',
      myText: '',
      bgColors: ['light-blue', 'light-green', 'light-yellow', 'light-red'],
    };
  },
  methods: {
    submit(n, email, t) {
      function validateEmail(mail) {
        // eslint-disable-next-line
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(mail).toLowerCase());
      }
      if (!validateEmail(email)) {
        window.alert('請輸入E-mail');
        return;
      }
      this.myName = '訪客';
      this.myText = '';
      this.$emit('submit', n, email, t);
    },
    parseTime(t) {
      return (new Date(t)).toLocaleDateString();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fluid {
  text-align: center;
  width:100%;
}
</style>
