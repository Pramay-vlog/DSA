/* Linked List */
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    // WRITE LL CONSTRUCTOR HERE //
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if (this.length === 1) {
            this.tail = null
        }
        return temp
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    /* Update */
    set(index, value) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === index.length) return this.push(value)
        if (index < 0 || index > this.length) return false

        const newNode = new Node(value)
        const temp = this.get(index - 1)

        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()
        if (index < 0 || index > this.length) return false

        let pre = this.get(index - 1)
        let temp = pre.next

        pre.next = temp.next
        temp.next = null
        this.length--
        return temp
    }

    /* Interview Topic */
    reverse() {
        // Change the order of connection of elements
        /* 
            Q. 1 --> 2 --> 3 -->
            A. <-- 1 <-- 2 <-- 3 
        */
        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let next = temp.next
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

}

/* Doubly Linked List */
class DNode {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList {
    constructor(value) {
        const newNode = new DNode(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new DNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let temp = this.tail
        if (this.length === 0) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp
    }

    unshift(value) {
        const newNode = new DNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return temp
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp
    }

    set(index, value) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === index.length) return this.push(value)
        if (index < 0 || index > this.length) return false

        const newNode = new Node(value)
        const before = this.get(index - 1)
        const after = before.next
        before.next = newNode
        newNode.next = after
        this.length++
        return true
    }

    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()
        if (index < 0 || index > this.length) return false

        let temp = this.get(index - 1)

        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null

        this.length--
        return temp
    }

}

/* Stack */
class stackNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new stackNode(value)
        this.top = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new stackNode(value)
        if (this.length === 0) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (this.length === 0) return undefined
        let temp = this.top
        this.top = this.top.next
        temp.next = null
        this.length--
        return temp
    }

}

/* Queue */
class queueNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const newNode = new queueNode(value)
        this.first = newNode
        this.last = newNode
        this.length++
    }

    // push
    enqueue(value) {
        const newNode = new queueNode(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }

    // shift
    dequeue() {
        if (this.length === 0) return undefined
        let temp = this.first

        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            temp.next = null
        }
        this.length--
        return temp
    }

}

/* Binary Search Tree */
class bstNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new bstNode(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }

        let temp = this.root
        while (true) {
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }

    }

    contains(value) {
        if (!this.root) return false
        let temp = this.root
        while (temp) {
            if (value < temp.value) {
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false
    }

    minValueNode(currentNode) {
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode
    }

}

/* Hash tables */
class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            //? making math function (here 23 is any random odd number)
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.dataMap[index]) this.dataMap[index] = []
        this.dataMap[index].push([key, value])
        return this
    }

    get(key) {
        let index = this._hash(key)
        if (!this.dataMap[index]) return undefined
        for (let i = 0; i < this.dataMap[index].length; i++) {
            if (this.dataMap[index][i][0] === key) return this.dataMap[index][i][1]
        }
    }

}

/* QA */
function commonItems(a1, a2) {
    let obj = {}
    for (let i = 0; i < a1.length; i++) {
        obj[a1[i]] = true
    }

    for (let i = 0; i < a2.length; i++) {
        if (obj[a2[i]]) return true
    }

    return false
}

/* Graphs */
class Graphs {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) return false
        this.adjacencyList[vertex] = []
        return true
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false
        if (!this.adjacencyList[vertex1].includes(vertex2)) this.adjacencyList[vertex1].push(vertex2)
        if (!this.adjacencyList[vertex2].includes(vertex1)) this.adjacencyList[vertex2].push(vertex1)
        return true
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return false
        this.adjacencyList[vertex1] = this.adjacencyList[vertex2].filter(i => i !== vertex1)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(i => i !== vertex2)
        return true
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined
        while (this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, temp)
        }
        delete this.adjacencyList[vertex]
        return this
    }

}

/* Recursion */
function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

/* Bubble Sort */
// compare two elements and swap if needed. Repeat untill sorted.
function bubbleSort(a) {
    // [6, 4, 2, 5, 1, 3]
    for (let j = 0; j < a.length; j++) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] > a[i + 1]) {
                let temp = a[i]
                a[i] = a[i + 1]
                a[i + 1] = temp
            }
        }
    }
}

/* Selection sort */
// find smallest element and swap with first element. Repeat untill sorted.
function selectionSort(a) {
    // [6, 4, 2, 5, 1, 3]
    let min;
    for (let i = 0; i < a.length; i++) {
        min = i
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[min]) min = j
        }
        if (a[i] !== a[min]) {
            let temp = a[i]
            a[i] = a[min]
            a[min] = temp
        }
    }
    return a

}

/* Insertion sort */
// start with second element from array and compare with previous element
function InsertionSort(arr) {
    // [6, 4, 2, 5, 1, 3]
    let temp;
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i]
        for (var j = i + 1; arr[j] > temp && j > -1; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = temp
    }
    return arr
}

/* Merge sort */
// split array in half untill only one element left. Then merge back in sorted order.
// [1,3,7,8] [2,4,5,6]
//? Helper function for sorting
function merge(array1, array2) {
    let combined = []
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i])
            i++
        } else {
            combined.push(array2[j])
            j++
        }
    }

    while (i < array1.length) {
        combined.push(array1[i])
        i++
    }

    while (j < array2.length) {
        combined.push(array2[j])
        j++
    }
    return combined;
}

function mergeSort(array) {
    if (array.length === 1) return array

    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}