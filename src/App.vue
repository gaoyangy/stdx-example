<template>
  <div id="app">{{msg}}</div>
</template>
<script>
  import {isFunction} from 'sav-util'
  export default {
    name: 'App',
    props: ['msg'],
    methods: {
      isFunction
    },
    created () {
      if (!this.msg) {
        throw new Error('no msg')
      }
    }
  }
</script>

<style>
  #app {
    font-size: 10px;
  }
</style>

<style lang="sass">
  .sass
    font-size: 10px
</style>

<style lang="less">
  .less {
    font-size: 10px
  }
</style>

<style lang="stylus">
$var = red
.stylus
  color $var
</style>
