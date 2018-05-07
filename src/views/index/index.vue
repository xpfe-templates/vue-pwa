<template>
  <div class="index">
    <img class="index-logo" src="~@/assets/img/logo.png" alt="">
    <div class="index-text">{{date | formatDate('hh:mm:ss') }} hello, {{name}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Index',
  data() {
    return {
      date: Date.now()
    }
  },
  computed: {
    ...mapGetters(['name']),
  },

  methods: {
    ...mapActions(['SetName'])
  },

  mounted() {
    setTimeout(() => {
      this.SetName({ name: 'ergou' })
    }, 3000)
    setInterval(() => {
      this.date = Date.now()
    }, 1000)
  }
}
</script>

<style lang="postcss" scoped>
.index {
  text-align: center;
  &-logo {
    margin-top: 20px;
    width: 120px;
    height: 120px;
  }
  &-text {
    margin-top: 20px;
  }
}
</style>
