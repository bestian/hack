<template lang="pug">
  .hello
    .ui.container
      .ui.piled.segment.heart(:class="{dark: dark}")
        router-link(to="/faq")
          img.float.left(src="/img/elf.png", alt="elf")
        sui-header(size="large") {{ msg }}
        router-link(to="/payment")
          img.logo(src="../assets/logo.png")
        sui-header(size="large") 在禮物經濟的邏輯中，
          br
          | 相互分享有餘，隨喜不訂價
          .sub.header.left 隨喜不訂價並不是完全免費，但是您可以衡量您的經濟狀況和從課程中得到的與付出的流動，自行決定給予多少的金錢回饋
          .sub.header.left 先試課一次，之後e-mail詳談~
          .sub.header.left
            router-link(to="/payment")
              | 可參考以前的收費標準
          br
          .sub.header.left 目前尚可預約課程時間:
          .sub.header.left 週一下午，週六上午，週日上午。
        h3
          a(href="https://forms.gle/bifRYSf24UNfx8Te6", target="_blank", @click="track('viewform', 100)", rel="noopener noreferrer") 報名: 請按此填表
        br
        br
        sui-grid(:columns="2" divided stackable)
          sui-grid-row
            sui-grid-column
              .light-green.sh
                sui-header(size="large") 一對一
                  .ui.sub.header
                    | 隨喜不訂價。試課也是隨喜不訂價。
            sui-grid-column
              .light-yellow.sh
                sui-header(size="large") 一對二
                  .ui.sub.header
                    | 隨喜不訂價。試課也是隨喜不訂價。
</template>
<script>
export default {
  name: 'GiFt',
  metaInfo: {
    title: '禮物經濟',
  },
  props: ['likes', 'dark'],
  data() {
    return {
      msg: '禮物經濟',
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

.ui.sub.header {
  font-size: 18px !important;
}

.light-green, .light-yellow {
  height: 10em;
  padding: 2em 0;
}
</style>
