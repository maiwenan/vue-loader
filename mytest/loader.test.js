const compiler = require('./compiler')
const expect = require('chai').expect

describe('vue-loader', () => {
  it('Inserts name and outputs JavaScript', (done) => {
    compiler().then((stats) => {
      const output = stats.toJson().modules[0].source

      // stats.toJson().modules.forEach(module => {
      //   if (module.identifier.indexOf('notification') !== -1) {
      //     console.log(module)
      //   }
      // })
      // console.log(stats.toJson().modules)
      expect(output).to.be.a('string')
      done()
    })
  })
})
