<template lang="pug">
  .hello
    .ui.container
      .ui.segment
        h2
          i.thumbs.up.icon
          | {{$t('about_intro')}}
        h3
          img.logo(src="/logo.png")
          br
          | {{$t('about_slogan')}}
        .ui.two.stackable.cards
          .ui.card
            .image
              i.time.icon
            .description
              h3 {{$t('my_history')}}
              .ui.bulleted.list
                .item {{$t('前端網站設計7年')}}
                .item {{$t('手機App設計5年')}}
                .item {{$t('自主學習促進會資訊長2年')}}
                .item {{$t('網站設計教師5年')}}
          .ui.card
            .image
              i.time.icon
            .description
              h3 {{$t('my_books')}}
              .ui.bulleted.list
                a.item(href="https://www.books.com.tw/products/0010759330", target="_blank", rel="noopener noreferrer")
                  i.book.icon
                  | {{$t('普格碼島的法師-歡樂自學寫程式/網路與書出版')}}
                a.item(href="https://www.books.com.tw/products/0010687205", target="_blank", rel="noopener noreferrer")
                  i.book.icon
                  | {{$t('跟孩子一起玩數學/遠流出版')}}
                a.item(href="https://www.books.com.tw/products/0010335877", target="_blank", rel="noopener noreferrer")
                  i.book.icon
                  | {{$t('另類教育在台灣/唐山出版')}}
          .ui.card
            .image
              i.globe.icon
            .description
              h3 {{$t('my_domain')}}
              .ui.bulleted.list
                .item {{$t('RWD網站設計')}}
                .item {{$t('PWA設計')}}
                .item {{$t('Hybrid手機App設計')}}
                .item {{$t('UI/UX設計')}}
                .item {{$t('前端程式設計')}}
          .ui.card
            .image
              i.plug.icon
            .description
              h3 {{$t('擅長工具')}}
              .ui.bulleted.list
                .item html5 + css3
                .item vue.js
                .item quasar framework
                .item firebase API
                .item Google API
          .ui.card
            .image
              i.mail.icon
            .description
              h3 {{$t('Connect_Me')}}
              .ui.bulleted.list
                a.item(href="https://www.tasker.com.tw/workroom/aaRdK2", target="_blank", rel="noopener noreferrer") Tasker ID: bestian
                a.item(href="mailto:bestian@gmail.com") Email: bestian@gmail.com
                a.item(href="https://www.github.com/bestian/", target="_blank", rel="noopener noreferrer") Github ID: bestian

</template>

<script>
export default {
  name: 'AbOut',
  metaInfo () { 
    return {
      title: this.$t('about_me')
    }
  },
  props: ['likes', 'dark'],
  data: () => ({
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .ui.bulleted.list {
    text-align: left;
  }
</style>
