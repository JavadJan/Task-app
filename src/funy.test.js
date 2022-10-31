const funy = require('./funy')
const suny = require('./suny')
const Update = require('./Update')

test('should first', () => {
    expect(funy()).toBe('funy')
})

test('should suny', () => {
    expect(suny()).toBe('suny')
})

test('should update', () => { 
    
    console.log(Update)
 })