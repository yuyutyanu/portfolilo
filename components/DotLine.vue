<template>
  <div id="canvas">

  </div>
</template>

<script>
  import DotLine from '~/assets/js/DotLine/DotLine.js'
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
        velocity: 1,
        dotLines: [],
        count: 0
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

          for (let i = 1; i < 6; i++) {
            this.dotLines.push(new DotLine(p, i))
          }
        }
      },
      draw (p) {
        return () => {
          p.clear()
          this.count++
          this.dotLines.forEach((dotLine, i) => {
            if (i !== 0) {
              dotLine.setFromPoint(this.dotLines[i - 1].toPointX, this.dotLines[i - 1].toPointY)
            }
            p.stroke(0, 30)
            dotLine.update()
            dotLine.display()
          })
        }
      }
    }
  }
</script>

<style scoped>
  #canvas {
    position: fixed;
    width: 100%;
    height: 100vh;
  }
</style>