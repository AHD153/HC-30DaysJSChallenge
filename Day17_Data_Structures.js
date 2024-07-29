// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const node1 = new Node(2)
const node2 = new Node(5)
const node3 = new Node(1)

// Task 2: Implement a LinkedList class with methods to add a node to the end, and display all nodes.
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    add(value) {
        const node = new Node(value)

        if (this.head === null) {
            this.head = node
        }
        else {
            this.tail.next = node
        }
        this.tail = node
    }

    display() {
        let current = this.head

        while (current !== null) {
            console.log(current.value)
            current = current.next
        }
    }
}

const list = new LinkedList()
list.add(node1)
list.add(node2)
list.add(node3)

list.display()

// Task 3: Implement a Stack class with method push(add element), pop(remove element), and peek(view the top element).
class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item)
    }
    pop() {
        if (this.items.length == 0) {
            return 'Underflow'
        }
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
}

let stackList = new Stack()
stackList.push(1)
stackList.push(2)
stackList.push(3)
console.log(stackList.peek())
console.log(stackList.pop())
console.log(stackList.peek())

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
const str = "abcd"
const reverseString = new Stack()
let result = ""
for (const char of str) {
    reverseString.push(char)
}
for (let i = 0; i < str.length; i++) {
    result += reverseString.pop()
}
console.log(result)

// Task 5: Implement a Queue class with methods enqueue(add element), dequeue(remove element), and front(view the first element).
class Queue {
    constructor() {
        this.items = []
    }
    enqueue(value) {
        this.items.push(value)
    }
    dequeue() {
        if (this.items.length === 0) {
            return 'Underflow'
        }
        return this.items.shift()
    }
    front() {
        if (this.items.length === 0) {
            return 'Queue is empty'
        }
        return this.items[0]
    }
}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.front())
console.log(queue.dequeue())
console.log(queue.front())
console.log(queue.dequeue())
console.log(queue.front())

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processes in order.
const printer = new Queue()
printer.enqueue('Print 1')
printer.enqueue('Print 2')
printer.enqueue('Print 3')
console.log(printer.front())
console.log(printer.dequeue())
console.log(printer.front())
console.log(printer.dequeue())
console.log(printer.front())
console.log(printer.dequeue())
console.log(printer.front())

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.
class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.
class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new TreeNode(value)

        if (!this.root) {
            this.root = newNode
            return
        }

        let current = this.root
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode
                    break
                }
                current = current.left
            }
            else {
                if (!current.right) {
                    current.right = newNode
                    break
                }
                current = current.right
            }

        }
    }

    inOrderTraversal(node = this.root) {
        if (!node) {
            return
        }
        this.inOrderTraversal(node.left)
        console.log(node.value)
        this.inOrderTraversal(node.right)
    }
}

const newBinaryTree = new BinaryTree()
newBinaryTree.insert(5)
newBinaryTree.insert(3)
newBinaryTree.insert(7)
newBinaryTree.insert(2)
newBinaryTree.insert(4)
// newBinaryTree.inOrderTraversal()

// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search(BFS)
class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

console.log(graph.bfs('A')); 
// Output: [ 'A', 'B', 'C', 'D', 'E' ]