<template>
  <section class="container">
    <div id="canvas">

    </div>
  </section>
</template>

<script>
  export default {
    mounted () {
      const sketch = (p) => {
        p.preload = this.preload(p)
        p.setup = this.setup(p)
        p.draw = this.draw(p)
      }
      const p5 = new this.$p5(sketch)
      this.$store.commit('SET_P5', p5)
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
    data () {
      return {
        width: null,
        height: null
      }
    },
    methods: {
      preload (p) {
        return () => {
          console.log('preload')
        }
      },
      setup (p) {
        return () => {
          let canvas = p.createCanvas(this.width, this.height)
          canvas.parent('#canvas')
        }
      },
      draw (p) {
        return () => {
          p.rect(p.width / 2, p.height / 2, 30, 30)
        }
      }
    }
  }
</script>

<style>
  .container {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

</style>
