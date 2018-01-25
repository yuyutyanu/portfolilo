<template>
  <div>
    <div id="canvas">

    </div>
  </div>
</template>

<script>
  import PointObj from '~/assets/js/Polygon/PointObj.js'
  import Branch from '~/assets/js/Polygon/Branch.js'

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
        rootPoints: [],
        strutNoise: 0,
        strokeNoise: 0,
        angleStep: 4,
        stepVelocity: 0.05,
        angle: 361,
        angleVelocity: 1
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
          p.translate(p.width / 2, p.height / 2)
          this.strutNoise = p.random(10)
          p.strokeWeight(0.5)
        }
      },
      draw (p) {
        return () => {
          p.background(255)
          p.translate(p.width / 2, p.height / 2)
          this.rootPoints = []

          this.setRootPoints(p)
          this.strutNoise += 0.01
          this.setPolygonAngle(p)
          const rootBranch = new Branch(0, 0, this.rootPoints, p.noise(this.strutNoise) * 2)
          this.displayPolygon(p, rootBranch)
          this.displayStrut(p, rootBranch)

          rootBranch.getChild().forEach(branch => {
            this.displayPolygon(p, branch)
            this.displayStrut(p, branch)
          })
        }
      },
      setRootPoints (p) {
        const angleStep = this.angle / this.angleStep
        for (let i = 0; i < this.angle; i += angleStep) {
          const radius = 250
          const x = radius * p.cos(p.radians(p.frameCount + i))
          const y = radius * p.sin(p.radians(p.frameCount + i))
          this.rootPoints.push(new PointObj(x, y))
        }
      },
      setPolygonAngle (p) {
        if (this.angleStep < 4 || this.angleStep > 32) {
          this.stepVelocity *= -1
        }
        if (this.angle < 361 || this.angle > 2048) {
          this.angleVelocity *= -1
        }

        this.angleStep += this.stepVelocity
        this.angle += this.angleVelocity
      },
      displayPolygon (p, branch) {
        for (let i = 0; i < branch.outerPoints.length; i++) {
          p.stroke(0, 40)
          let nextIndex = i + 1
          if (nextIndex === branch.outerPoints.length) nextIndex = 0
          p.line(branch.outerPoints[i].x, branch.outerPoints[i].y, branch.outerPoints[nextIndex].x, branch.outerPoints[nextIndex].y)
        }
      },
      displayStrut (p, branch) {
        p.stroke(0, 40)
        for (let i = 0; i < branch.midPoints.length; i++) {
          p.line(branch.midPoints[i].x, branch.midPoints[i].y, branch.projPoints[i].x, branch.projPoints[i].y)
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