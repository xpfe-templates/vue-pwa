<template>
  <div class="index">
    <header>
      <span>Vue.js PWA</span>
    </header>
    <main>
      <div aspectratio w-188-246 class="box">
        <img aspectratio-content src="../../assets/img/logo.png" alt="Vue.js PWA">
      </div>
      <div class="box-border"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'index',
}
</script>

<style lang="postcss">
@import '../../assets/css/border.css';

[w-188-246] {
  width: 188px;
  // background-color: red;
}
[w-188-246] {
  aspect-ratio: '188:246';
}

.box {
  margin: 0 auto;
  background-image: svg(1px-border param(--color #00b1ff));
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}
header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

main {
  text-align: center;
  margin-top: 40px;
}
</style>
