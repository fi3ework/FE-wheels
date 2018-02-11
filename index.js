import EE from './event-emitter'

let ee = new EE()

let shoot = () => {
  console.log('shoot')
}

ee.once('call', shoot)

ee.emit('call')
ee.emit('call')

ee.removeListener('call', shoot)
ee.emit('call')
