<template>
  <div class="gallary">
    <div class = "inline" v-for="(t,idx) in test" :key="t.src">
      <a @click="use(t.src)">
        <img class ="g" :src="t.src"/>
      </a>
      <a @click="del(idx)">x</a>
    </div>
    <div>
      <h1>
        <router-link to="/drawing">畫畫</router-link>
      </h1>
    </div>
  </div>
</template>

<script>

import { db } from '../db';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  metaInfo: {
    title: '畫廊',
  },
  firestore: {
    test: db.collection('img'),
  },
  methods: {
    use(s) {
      localStorage.src = s;
      this.$router.push('/drawing');
    },
    del(i) {
      let k = i;
      db.collection('img').onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc, idx) => {
          console.log(idx);
          if (idx === k) {
            console.log('delete!');
            db.collection('img').doc(doc.id).delete().catch((error) => {
              console.log(error);
            });
            k = null;
          }
        });
      });
    },
  },
  mounted() {
  },
  data() {
    return {
      test: null,
      message: 'Hello Vue!',
      vueCanvas: null,
      painting: false,
      canvas: null,
      ctx: null,
      color: '#000000',
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a#save {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  background-color: #3f3;
  padding: 3px;
  border-radius: 5px;
  color: black;
}

a#clear {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  background-color: yellow;
  padding: 3px;
  border-radius: 5px;
  color: black;
}

#canvas {
    border: 3px solid black;
}

#c {
  position: fixed;
  bottom: 0;
  right: 0;
}

.g {
  height: 20vmin;
  border: 3px gold ridge;
  border-radius: 15px;
}

a {
  cursor: pointer;
}

.inline {
  display: inline-block;
}
</style>
