const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    queue.enqueue('Maçã')
    queue.enqueue('Abacaxi')
    queue.enqueue('Banana')
    queue.enqueue('Uva')

    expect(queue.size()).toBe(4)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    queue.enqueue('Maçã')
    queue.enqueue('Abacaxi')
    queue.enqueue('Banana')
    queue.enqueue('Uva')

    expect(queue.elements).toEqual(['Maçã','Abacaxi','Banana','Uva'])
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.enqueue('Maçã')
    queue.enqueue('Abacaxi')
    queue.enqueue('Banana')
    queue.enqueue('Uva')

    expect(queue.peek()).toBe('Maçã')
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.enqueue('Maçã')
    queue.enqueue('Abacaxi')
    queue.enqueue('Banana')
    queue.enqueue('Uva')
    queue.dequeue()

    
    expect(queue.elements).toEqual(['Abacaxi', 'Banana', 'Uva'])
  })
})