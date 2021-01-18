<template lang="pug">
  .hello
    .ui.container
      .ui.piled.segment.heart
        sui-header(size="large") {{ msg }}
        router-link(to="/faq")
          img.logo(src="../assets/logo.png")
        sui-header(size="large") 要怎麼付費呢?
          .sub.header 以轉帳的方式，先試課一次，之後e-mail詳談~
          .sub.header 也歡迎換工而不是付費喔~
        br
        br
        sui-grid(:columns="2" divided stackable)
          sui-grid-row
            sui-grid-column
              .light-green
                sui-header(size="medium") 一對一
                  .ui.sub.header
                    | $NT1000 / 時。試課500元。
                    br
                    | 也歡迎換工而不是付費喔~
            sui-grid-column
              .light-yellow
                sui-header(size="medium") 一對二
                  .ui.sub.header
                    | $NT600 / 人時。試課400元。
                    br
                    | 也歡迎換工而不是付費喔~
</template>
<script>
export default {
  name: 'Payment',
  data() {
    return {
      msg: '收費標準',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tada {
  position: relative;
  animation: tada 4s infinite;
}

</style>
