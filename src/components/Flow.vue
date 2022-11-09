<template lang="pug">
  .hello
    .ui.container
      .ui.piled.segment.ranged(:class="{dark: dark}")
        router-link(to="/faq")
          img.float.left(src="/img/elf.png", alt="elf")
        sui-header(size="large") 上課流程
        router-link(to="/payment")
          img.logo(src="../assets/logo.png")
        sui-header(size="large") 視訊上課，不用交通
          .sub.header.left 透過視訊上課，以及
            a(href="https://www.github.com/", target="_blank" rel="noopener noreferrer")
              i.github.icon
              | Gitgub協作平台
            | ，大家可以方便地協作開發程式。
        sui-grid(:columns="4" stackable)
          sui-grid-row
            sui-grid-column
              .light-blue.sh
                sui-header(size="medium") 視訊連線
                sui-list(ordered)
                  a(is="sui-list-item" v-for="l in links", :key="l.n", :href="l.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + l.h")
                    | {{ l.n }}
            sui-grid-column
              .light-green.sh
                sui-header(size="medium") 工具下載
                sui-list(ordered)
                  a(is="sui-list-item" v-for="w in works", :key="w.n", :href="w.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + w.h")
                    | {{ w.n }}
            sui-grid-column
              .light-yellow.sh
                sui-header(size="medium") 進行方式
                sui-list(ordered)
                  a(is="sui-list-item" v-for="f in flows", :key="f.n", :href="f.h", target="_blank")
                    img(:src="'https://www.google.com/s2/favicons?domain=' + f.h")
                    | {{ f.n }}
            sui-grid-column
              .light-red.sh
                sui-header(size="medium") 補充說明
                sui-list(ordered)
                  div(is="sui-list-item" v-for = "d in des", :key = "d") {{ d }}

</template>

<script>
export default {
  name: 'FlOw',
  metaInfo: {
    title: '上課流程',
  },
  props: ['likes', 'dark'],
  data() {
    return {
      links: [
        { n: 'google hangouts', h: 'https://hangouts.google.com/webchat/start?hl=zh-TW' },
      ],
      works: [
        { n: 'google hangouts', h: 'https://hangouts.google.com/webchat/start?hl=zh-TW' },
        { n: 'Node.js', h: 'https://nodejs.org/en/' },
        { n: 'Vue.js', h: 'https://vuejs.org' },
        { n: 'Sublime Text', h: 'https://www.sublimetext.com/3' },
        { n: 'Github Desktop', h: 'https://desktop.github.com' },
      ],
      flows: [
        { n: '專題創作', h: 'https://www.tcavs.tc.edu.tw/upload/951219%E5%B0%88%E9%A1%8C%E8%A3%BD%E4%BD%9C%E7%9A%84%E5%AD%B8%E7%BF%92%E6%96%B9%E6%A1%88%E8%88%87%E6%8C%87%E5%B0%8E%E6%96%B9%E6%B3%95.pdf' },
        { n: '參考資源', h: 'https://goban.tw' },
        { n: '有問必答', h: 'https://www.facebook.com/%E9%9B%B6%E6%99%82%E9%BB%91%E6%9D%BF-110565913890537/' },
      ],
      des: [
        '學習者自選主題，教學者分享要製作它需要的語法。',
        '以如何落實學習者的想像為中心',
        '另透過觀攀與示範擴充學習者的想像',
      ],
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

@keyframes tada {
  0%   {color:red; left:-5vw; top:0px;}
  50%  {color:blue; left:5vw; top:0x;}
  100% {color:red; left:-5vw; top:0px;}
}

</style>
