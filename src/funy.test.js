const funy = require('./funy')
const suny = require('./suny')

test('should first', () => { 
    expect(funy()).toBe('funy')
 })

 test('should suny', () => { 
    expect(suny()).toBe('suny')
  })