import Emitter from './src/index.js'

let ee = new Emitter()
ee.on('say', ()=>(console.log('emitted!')))
ee.emit('say')

ee.once('say once', ()=>(console.log('this message should only display once!')))
ee.emit('say once')
ee.emit('say once')
ee.emit('say once')
