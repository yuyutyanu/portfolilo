<template>
  <section class="container">
    <div id="canvas">

    </div>
  </section>
</template>

<script>
  import Rule from '~/assets/js/Lsystem/Rule.js'
  import Lsystem from '~/assets/js/Lsystem/Lsystem.js'
  import Turtle from '~/assets/js/Lsystem/Turtle.js'
  export default {
    mounted () {
      this.width = window.innerWidth
      this.height = window.innerHeight

      const sketch = (p) => {
        p.preload = this.preload(p)
        p.setup = this.setup(p)
        p.draw = this.draw(p)
        p.mousePressed = this.update(p)
      }
      const p5 = new this.$p5(sketch)
      this.p5 = p5

      window.addEventListener('resize', this.resizeCanvas)
    },
    data () {
      return {
        width: null,
        height: null,
        ruleSet: null,
        lsys: null,
        turtle: null,
        counter: 0,
        p5: null
      }
    },
    methods: {
      resizeCanvas () {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.p5.resizeCanvas(this.width, this.height)
      },
      preload (p) {
        return () => {
          console.log('preload')
        }
      },
      setup (p) {
        return () => {
          let canvas = p.createCanvas(this.width, this.height)
          canvas.parent('#canvas')
          this.ruleSet = new Rule('F', 'FF[+F+F][-F-F]')
          this.lsys = new Lsystem('F', this.ruleSet)
          this.turtle = new Turtle(p, this.lsys.sentence, this.height / 3, p.radians(25))
        }
      },
      draw (p) {
        return () => {
          p.noFill()
          p.translate(this.width / 2, this.height)
          p.rotate(-p.PI / 2)
          this.turtle.render()
          p.noLoop()
        }
      },
      update (p) {
        return () => {
          if (this.counter < 6) {
            p.push()
            this.lsys.generate()
            this.turtle.setTodo(this.lsys.sentence)
            this.turtle.changeLen(0.50)
            p.pop()
            p.redraw()
            this.counter++
          }
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
