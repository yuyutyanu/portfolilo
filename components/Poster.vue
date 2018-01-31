<template>
  <div>
    <div id="canvas">

    </div>
  </div>
</template>

<script>
  export default{
    mounted () {
      this.width = window.innerWidth
      this.height = window.innerHeight

      const sketch = (p) => {
        p.setup = this.setup(p)
        p.draw = this.draw(p)
      }
      const p5 = new this.$p5(sketch)
      this.p5 = p5

      window.addEventListener('resize', this.resizeCanvas)
    },
    data () {
      return {
        width: null,
        height: null,
        p5: null
      }
    },
    methods: {
      resizeCanvas () {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.p5.resizeCanvas(this.width, this.height)
      },
      setup (p) {
        return () => {
          let canvas = p.createCanvas(this.width, this.height)
          canvas.parent('#canvas')

          p.background('#F5f5f5')
          p.textAlign(p.CENTER, p.CENTER)
          p.textSize(230)
          p.text('Job', p.width / 2, p.height / 2)

          const colors = ['#409EFF', '#67C23A', '#F56C6C', '#E6A23C', '#909399']
          p.beginShape()
          colors.forEach((color) => {
            p.noStroke()
            p.fill(color)
            const ellipseSize = p.random(80, 120)
            const x = p.map(p.random(p.width), 0, p.width, 100, p.width - 100)
            const y = p.map(p.random(p.height), 0, p.height, 100, p.height - 100)
            console.log(x, y)
            p.ellipse(x, y, ellipseSize, ellipseSize)
            p.fill(128, 30)
            p.vertex(x, y)
          })
          p.endShape()
        }
      },
      draw (p) {
        return () => {
        }
      }
    }
  }
</script>

<style scoped>
  #canvas {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    display: none;
  }
</style>