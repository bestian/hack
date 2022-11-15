<template lang="pug">
  .hello
    .ui.container
      .ui.segment
        h2
          i.thumbs.up.icon
          | 關於Bestian(唐宗浩)
        h3
          img.logo(src="/logo.png")
          br
          | 精準、高效、客製化
        .ui.two.stackable.cards
          .ui.card
            .image
              i.time.icon
            .description
              h3 我的經歷
              .ui.bulleted.list
                .item 前端網站設計7年
                .item 手機App設計5年
                .item 自主學習促進會資訊長2年
                .item 網站設計教師5年
          .ui.card
            .image
              i.time.icon
            .description
              h3 我的著作
              .ui.bulleted.list
                a.item(href="https://www.books.com.tw/products/0010759330", target="_blank", rel="noopener noreferrer")
                  i.book.icon
                  | 普格碼島的法師-歡樂自學寫程式/網路與書出版
                a.item(href="https://www.books.com.tw/products/0010687205", target="_blank", rel="noopener noreferrer")
                  i.book.icon
                  | 跟孩子一起玩數學/遠流出版
                a.item(href="https://www.books.com.tw/products/0010335877", target="_blank", rel="noopener noreferrer")
                  i.book.icon
                  | 另類教育在台灣/唐山出版
          .ui.card
            .image
              i.globe.icon
            .description
              h3 擅長領域
              .ui.bulleted.list
                .item RWD網站設計
                .item PWA設計
                .item Hybrid手機App設計
                .item UI/UX設計
                .item 前端程式設計
          .ui.card
            .image
              i.plug.icon
            .description
              h3 擅長工具
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
              h3 聯絡方式
              .ui.bulleted.list
                a.item(href="https://www.tasker.com.tw/workroom/aaRdK2", target="_blank", rel="noopener noreferrer") Tasker ID: bestian
                a.item(href="mailto:bestian@gmail.com") Email: bestian@gmail.com
                a.item(href="https://www.github.com/bestian/", target="_blank", rel="noopener noreferrer") Github ID: bestian

</template>

<script>
import Timeline from 'timeline-vuejs';

export default {
  name: 'HelloWorld',
  components: {
    Timeline,
  },
  metaInfo: {
    title: '關於我',
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
