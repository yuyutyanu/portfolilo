<template>
  <div>
    <div id="canvas">

    </div>
  </div>
</template>

<script>
  import RandomPoint from '~/assets/js/RandomTriangle/RandomPoint.js'
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
        points: []
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
          for (let i = 0; i < 60; i++) {
            const location = p.createVector(p.random(0, p.width), p.random(0, p.height))
            const velocity = p.createVector(p.random(-0.5, 0.5), p.random(-0.5, 0.5))
            const acceleration = p.createVector(p.random(-0.05, 0.05), p.random(-0.05, 0.05))
            const point = new RandomPoint(location, velocity, acceleration)
            this.points.push(point)
          }
        }
      },
      draw (p) {
        return () => {
          p.background(34, 49, 63)
          p.stroke(232, 126, 4)
          p.fill(249, 105, 14, 128)

          this.points.forEach((point, index) => {
            this.edge(p, point)
            point.location.add(point.velocity)
            this.displayTriangle(p, point, index)
          })
        }
      },
      edge (p, point) {
        if (point.location.x > p.width || point.location.x < 0) {
          point.velocity.x *= -1
        }
        if (point.location.y > p.height || point.location.y < 0) {
          point.velocity.y *= -1
        }
      },
      displayTriangle (p, point, index) {
        p.beginShape(p.TRIANGLES)
        p.vertex(point.location.x, point.location.y)
        this.points.forEach((otherPoint, otherIndex) => {
          if (index !== otherIndex) {
            const dist = point.location.dist(otherPoint.location)
            if (dist < 120) {
              p.vertex(otherPoint.location.x, otherPoint.location.y)
            }
          }
        })
        p.endShape()
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