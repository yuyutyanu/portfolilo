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
        points: [],
        xPos: [],
        yPos: [],
        numPoints: 600,
        radiusNoise: 0,
        rotateNoise: 0
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
          p.background(0)
          this.xPos = []
          this.yPos = []

          this.rotateNoise = p.random(10)
          this.radiusNoise = p.random(10)
          p.translate(p.width / 2, p.height / 2)
          this.setOuterCircle(p)
        }
      },
      draw (p) {
        return () => {
          p.background(0)
          p.translate(p.width / 2, p.height / 2)
          this.displayOuterCircle(p)
          this.displayInnerCircle(p)
        }
      },
      setOuterCircle (p) {
        for (let i = 0; i < this.numPoints; i++) {
          const radius = 200
          const rad = p.random(270)
          const x = radius * p.cos(p.radians(rad))
          const y = radius * p.sin(p.radians(rad))
          this.xPos.push(x)
          this.yPos.push(y)
        }
      },
      displayOuterCircle (p) {
        this.rotateNoise += 0.01
        p.push()
        p.rotate(p.radians(p.TWO_PI * p.frameCount / 120 * p.noise(this.rotateNoise)))
        p.noFill()
        p.stroke(255)
        p.strokeWeight(0.2)
        p.beginShape()
        for (let i = 0; i < this.numPoints; i++) {
          p.vertex(this.xPos[i], this.yPos[i])
        }
        p.endShape(p.CLOSE)
        p.pop()
      },
      displayInnerCircle (p) {
        p.fill(0)
        p.noStroke()
        p.ellipse(0, 0, 250, 250)

        p.noFill()
        p.stroke(219, 10, 91, 128)
        p.strokeWeight(0.5)
        this.radiusNoise += 0.01

        for (let rad = 0; rad < 180; rad += 1) {
          const radius = 124 * p.noise(this.radiusNoise) + 1
          const x1 = radius * p.cos(p.radians(rad))
          const y1 = radius * p.sin(p.radians(rad))
          const x2 = radius * p.cos((p.radians(rad) + p.PI))
          const y2 = radius * p.sin((p.radians(rad) + p.PI))
          p.line(x1, y1, x2, y2)
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