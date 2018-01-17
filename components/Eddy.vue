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
        t: 0,
        angle: 10,
        flag: true
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
          let canvas = p.createCanvas(this.width, this.height, p.WEBGL)
          canvas.parent('#canvas')
        }
      },
      draw (p) {
        return () => {
          p.background(0, 15, 30)
          // X軸を中心に回転
          p.rotateX(80)
          p.rotateZ(p.frameCount * 0.05)

          let [s, t] = [0, 0]
          const radius = 250

          p.beginShape()
          while (s <= 180) {
            const radianS = p.radians(s)
            const radianT = p.radians(t)

            const x = radius * p.sin(radianS) * p.cos(radianT)
            const y = radius * p.sin(radianS) * p.sin(radianT)
            const z = radius * p.cos(radianS)

            p.stroke(0, 128, 128)
            p.vertex(x, y, z)

            s++
            t += this.angle
          }
          p.endShape()
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
  }
</style>