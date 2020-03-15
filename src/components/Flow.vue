<template lang="pug">
  .hello
    .ui.container
      sui-segment(raised='').ranged
        sui-header(size="large") {{ msg }}
        router-link(to="/payment")
          img.logo(src="../assets/logo.png")
        sui-header(size="large") 要怎麼上課呢?
          .sub.header 視訊連線是很好的方式喔~
        br
        br
        sui-grid(:columns="3" divided)
          sui-grid-row
            sui-grid-column
              sui-header(size="medium") 視訊連線
              sui-list(ordered)
                a(is="sui-list-item" v-for="l in links", :key="l.n", :href="l.h", target="_blank")
                  img(:src="'https://www.google.com/s2/favicons?domain=' + l.h")
                  | {{ l.n }}
            sui-grid-column
              sui-header(size="medium") 工具下載
              sui-list(ordered)
                a(is="sui-list-item" v-for="w in works", :key="w.n", :href="w.h", target="_blank")
                  img(:src="'https://www.google.com/s2/favicons?domain=' + w.h")
                  | {{ w.n }}
            sui-grid-column
              sui-header(size="medium") 進行方式
              sui-list(ordered)
                a(is="sui-list-item" v-for="f in flows", :key="f.n", :href="f.h", target="_blank")
                  img(:src="'https://www.google.com/s2/favicons?domain=' + f.h")
                  | {{ f.n }}
</template>

<script>
export default {
  name: 'Flow',
  data () {
    return {
      msg: '上課流程',
      links: [
        {n: 'google hangouts', h: 'https://hangouts.google.com/webchat/start?hl=zh-TW'}
      ],
      works: [
        {n: 'google hangouts', h: 'https://hangouts.google.com/webchat/start?hl=zh-TW'},
        {n: 'Node.js', h: 'https://nodejs.org/en/'},
        {n: 'Vue.js', h: 'https://vuejs.org'},
        {n: 'Sublime Text', h: 'https://www.sublimetext.com/3'},
        {n: 'Github Desktop', h: 'https://desktop.github.com'}
      ],
      flows: [
        {n: '專題創作', h: 'https://www.tcavs.tc.edu.tw/upload/951219%E5%B0%88%E9%A1%8C%E8%A3%BD%E4%BD%9C%E7%9A%84%E5%AD%B8%E7%BF%92%E6%96%B9%E6%A1%88%E8%88%87%E6%8C%87%E5%B0%8E%E6%96%B9%E6%B3%95.pdf'},
        {n: '參考資源', h: 'http://goban.tw'},
        {n: '有問必答', h: 'https://www.facebook.com/%E9%9B%B6%E6%99%82%E9%BB%91%E6%9D%BF-110565913890537/'}
      ]
    }
  }
}
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
