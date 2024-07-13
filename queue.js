class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size() {
    return this.elements.length;
  }

  enqueue(item) {
    this.elements.push(item);
  }

  dequeue() {
    return this.elements.shift();
  }

  peek() {
    return this.elements[0];
  }
}

module.exports = Queue