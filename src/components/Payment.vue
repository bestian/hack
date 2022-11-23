<template lang="pug">
  .hello
    .ui.container
      .ui.piled.segment.heart(:class="{dark: dark}")
        router-link(to="/faq")
          img.float.left(src="/img/elf.png", alt="elf")
        sui-header(size="large", class="main")
          | {{ $t(msg) }}
        router-link(to="/faq")
          img.logo(src="../assets/logo.png")
        sui-header(size="large") {{ $t('要怎麼付費呢?')}}
          .sub.header.left {{ $t('以轉帳的方式，先試課一次，之後e-mail詳談~')}}
          .sub.header.left {{ $t('也歡迎換工而不是付費喔~')}}
        h3
          a(href="https://forms.gle/bifRYSf24UNfx8Te6", target="_blank", @click="track('viewform', 100)", rel="noopener noreferrer") {{ $t('報名: 請按此填表')}}
        br
        br
        sui-grid(:columns="2" divided stackable)
          sui-grid-row
            sui-grid-column
              .light-green.sh
                sui-header(size="large") {{ $t('一對一')}}
                  .ui.sub.header
                    | $NT1500 / {{ $t('時') }}。{{$t('試課')}} 500 {{ $t('元') }}。
                    br
                    | {{ $t('也歡迎換工而不是付費喔~')}}
            sui-grid-column
              .light-yellow.sh
                sui-header(size="large") {{ $t('一對二')}}
                  .ui.sub.header
                    | $NT800 / {{ $t('時') }}。{{$t('試課')}} 400 {{ $t('元') }}。
                    br
                    | {{ $t('也歡迎換工而不是付費喔~')}}
</template>
<script>
export default {
  name: 'PayMent',
  metaInfo () { 
    return {
      title: this.$t('收費標準')
    }
  },
  props: ['likes', 'dark'],
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

.ui.sub.header {
  font-size: 18px !important;
}

.light-green, .light-yellow {
  height: 10em;
  padding: 2em 0;
}

</style>
