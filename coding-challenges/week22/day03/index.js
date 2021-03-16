class MinHeap {
    constructor(max) {
      this.max = max
      this.list = []
    }
  
    add(val) {
      if (this.list.length >= this.max) {
        if (val > this.list[0]) {
          this.remove()
          this.list.push(val)
          this.bubbleUp()
        }
      } else {
        this.list.push(val)
        this.bubbleUp()
      }
    }
  
    remove() {
      if (this.list.length == 1) {
        this.list.pop()
        return
      }
      let last = this.list.pop()
      this.list[0] = last
      this.bubbleDown()
    }
  
    peak(k) {
      let result = []
      if (this.list.length > 0) {
        for (let i = 0; i < k; i++) {
          result.push(this.list[i])
        }
      }
      return result;
    }
    
    bubbleUp() {
      let index = this.list.length - 1
      let parent = Math.floor((index - 1) / 2)
      while (parent >= 0 && this.list[parent] > this.list[index]) {
        let temp = this.list[parent]
        this.list[parent] = this.list[index]
        this.list[index] = temp
        index = parent
        parent = Math.floor((index - 1) / 2)
      }
    }
  
    bubbleDown() {
      let curr = 0
      let left, right
      while (true) {
        left = (2 * curr) + 1
        right = (2 * curr) + 2
        if (left > this.list.length - 1) {
          break
        }
        if (Math.min(this.list[left],
            this.list[right] || Number.MAX_SAFE_INTEGER) > this.list[curr]) {
          break
        }
        let temp
        if (this.list[right] !== undefined && this.list[right] < this.list[left]) {
          temp = this.list[right]
          this.list[right] = this.list[curr]
          this.list[curr] = temp
          curr = right
        } else {
          temp = this.list[left]
          this.list[left] = this.list[curr]
          this.list[curr] = temp
          curr = left
        }
      }
    }
  }
  
  const kthLargestNumbers = (array, k) => {
    let heap = new MinHeap(k, array)
  
    array.forEach((num) => {
      heap.add(num);
    });
  
    return heap.peak(k)
  }
  
  console.log(kthLargestNumbers([3, 1, 5, 12, 2, 11], 3))
  console.log(kthLargestNumbers([5, 12, 11, -1, 12], 3))