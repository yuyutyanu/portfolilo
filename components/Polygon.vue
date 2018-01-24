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
        branches: [],
        subBranches: []
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
          p.strokeWeight(1)

          this.setRootPoints(p)
          this.branches.push(new Branch(0, 0, this.rootPoints))

          for (let level = 0; level < 4; level++) {
            this.branches.push(new Branch(level, 0, this.branches[level].projPoints))
          }

          this.branches.forEach(branch => {
            this.displayPolygon(p, branch)
            this.displayStrut(p, branch)

          //            for (let i = 0; branch.outerPoints.length; i++) {
          //              let nextIndex = i - 1
          //              if (nextIndex < 0) {
          //                nextIndex = nextIndex + branch.outerPoints.length
          //              }
          //
          //              this.subBranches.push(new Branch(0, 0, [
          //                branch.outerPoints[i],
          //                branch.midPoints[i],
          //                branch.projPoints[i],
          //                branch.projPoints[nextIndex],
          //                branch.midPoints[nextIndex]
          //              ]))
          //            }
          })
        }
      },
      draw (p) {
        return () => {

        }
      },
      setRootPoints (p) {
        for (let i = 0; i < 360; i += 72) {
          const radius = 400
          const x = radius * p.cos(p.radians(i))
          const y = radius * p.sin(p.radians(i))
          this.rootPoints.push(new PointObj(x, y))
        }
      },
      displayPolygon (p, branch) {
        for (let i = 0; i < branch.outerPoints.length; i++) {
          let nextIndex = i + 1
          if (nextIndex === branch.outerPoints.length) nextIndex = 0
          p.line(branch.outerPoints[i].x, branch.outerPoints[i].y, branch.outerPoints[nextIndex].x, branch.outerPoints[nextIndex].y)
        }
      },
      displayStrut (p, branch) {
        for (let i = 0; i < branch.midPoints.length; i++) {
          p.ellipse(branch.midPoints[i].x, branch.midPoints[i].y, 16, 16)
          p.line(branch.midPoints[i].x, branch.midPoints[i].y, branch.projPoints[i].x, branch.projPoints[i].y)
          p.ellipse(branch.projPoints[i].x, branch.projPoints[i].y, 16, 16)
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