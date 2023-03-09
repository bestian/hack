<template lang="pug">
  .hello
    .ui.segment.container
      h2
        i.thumbs.up.icon
        | 案主好評
      .ui.divided.list
        .item
          p
            i.thumbs.up.icon
            | 案主陳雅雲評分:
            i.gold.star.icon
            i.gold.star.icon
            i.gold.star.icon
            i.gold.star.icon
            i.gold.star.icon
            | 完成速度很快！
            br
            | #配合度高 #好溝通 #速度快 #積極 #有耐心
            br
            a(href="https://www.tasker.com.tw/workroom/aaRdK2", target="_blank", rel="noopener noreferrer")
              | 查看連結
              i.right.arrow.icon
        .item
          p
            i.thumbs.up.icon
            | 案主tank評分:
            i.gold.star.icon
            i.gold.star.icon
            i.gold.star.icon
            i.gold.star.icon
            i.gold.star.icon
            | #配合度高 #專業 #好溝通 #速度快 #用心 #認真 #有耐心。
            br
            a(href="https://www.tasker.com.tw/workroom/aaRdK2", target="_blank", rel="noopener noreferrer")
              | 查看連結
              i.right.arrow.icon
        .item
          p
            i.thumbs.up.icon
            | 李〇卿說：Bestian Tang 二個月前為我完成了網站設計，他不但事前詳細了解我對網站的變置目標、希望呈現的方式，事中對功能要求與修改想法，事後的網站管理指導，都充滿耐心和善意。 當我開始管理網站，遇到困難，他的後續服務也讓我非常滿意。為了免除我的操作恐懼，他還另外依照我的習慣，量身打造了一個程式，讓我可以發個mail就完成新文章的更新，實在太棒了！ 誠摯推薦這位負責、願意耐心陪伴小白雇主的工程師。
            br
            a(href="https://www.pro360.com.tw/dashboard/profiles/303748/0", target="_blank", rel="noopener noreferrer")
              | 查看連結
              i.right.arrow.icon

</template>

<script>
import Timeline from 'timeline-vuejs';

export default {
  name: 'HelloWorld',
  components: {
    Timeline,
  },
  metaInfo: {
    title: '歡迎',
  },
  props: ['likes', 'dark'],
  data: () => ({
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .gold {
    color: gold;
  }

  .ui.bulleted.list {
    text-align: left;
  }
</style>
