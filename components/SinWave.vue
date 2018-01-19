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
        p5: null,
        angle: 0
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
        }
      },
      draw (p) {
        return () => {
          p.background('#65C6BB')
          p.beginShape()
          p.noFill()
          p.vertex(40, 40)
          p.vertex(p.width - 40, 40)
          p.vertex(p.width - 40, p.height - 40)
          p.vertex(40, p.height - 40)
          p.endShape(p.CLOSE)
          p.translate(p.width / 2, p.height / 2)
          p.ellipse(0, 0, 200, 200)
          p.rectMode(p.CENTER)
          p.stroke('#000')
          p.fill('#fff')
          const map = [[50, 50], [50, -50], [-50, -50], [-50, 50]]
          p.rect(0, 0, 10, 10)
          for (let i = 0; i < map.length; i++) {
            p.push()
            p.translate(map[i][0], map[i][1])
            this.sinWave(p)
            p.pop()
          }
          p.rotate(p.radians(135))
          this.sinWave(p)
          p.pop()
        }
      },
      sinWave (p) {
        const amplitude = 230
        let x = amplitude * p.cos(p.TWO_PI * p.frameCount / 120)
        let y = amplitude * p.sin(p.TWO_PI * p.frameCount / 120)

        p.line(0, 0, x, 0)
        p.line(0, 0, 0, y)
        p.ellipse(x, 0, 16, 16)
        p.ellipse(0, y, 16, 16)
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
  }
</style>