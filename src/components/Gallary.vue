<template>
  <div class="gallary">
    <div class = "inline" v-for="(t,idx) in test" :key="t.src">
      <img class ="g" :src="t.src"/>
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

import firebase from 'firebase';
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
    del(i) {
      db.collection('img').onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc, idx) => {
          console.log(idx);
          if (idx === i) {
            db.collection('img').doc(doc.id).delete().catch((error) => {
              console.log(error);
            });
          }
        });
      });
    },
    toBlob() {
      const storageRef = firebase.storage().ref();
      const mountainsRef = storageRef.child('drawing.jpg');
      const canvas = document.getElementById('canvas');
      canvas.toBlob((blob) => {
        const image = new Image();
        image.src = blob;
        image.setAttribute('crossorigin', 'anonymous');
        mountainsRef.put(blob).then(() => {
          console.log('Uploaded a blob or file!');
        });
      });
    },
    save() {
      const canvas = document.getElementById('canvas');
      this.$firestoreRefs.test.add({ src: canvas.toDataURL() });
    },
    startPainting(e) {
      this.painting = true;
      console.log(this.painting);
      this.draw(e);
    },
    startTouchPainting(e) {
      e.preventDefault();
      this.painting = true;
      console.log(this.painting);
      this.drawTouch(e);
    },
    finishedPainting() {
      this.painting = false;
      console.log(this.painting);
      this.ctx.beginPath();
      this.toBlob();
    },
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.finishedPainting();
    },
    drawTouch(e) {
      e.preventDefault();
      console.log(e);
      if (!this.painting) return;
      this.ctx.lineWidth = 10;
      this.ctx.fillStyle = this.color;
      this.ctx.strokeStyle = this.color;
      this.ctx.lineCap = 'round';
      this.ctx.lineTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY - 53);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY - 53);
    },
    draw(e) {
      if (!this.painting) return;
      this.ctx.lineWidth = 10;
      this.ctx.fillStyle = this.color;
      this.ctx.strokeStyle = this.color;
      this.ctx.lineCap = 'round';
      this.ctx.lineTo(e.clientX, e.clientY - 53);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX, e.clientY - 53);
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

.inline {
  display: inline-block;
}
</style>
