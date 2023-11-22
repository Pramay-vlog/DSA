# 1. Big O
- Code Efficiency
    a> time complexity
    b> space complexity
- https://www.bigocheatsheet.com
- Ω (omega), Θ (theta), O (Big O)
    let a =  [1,2,3,4,5,6,7]
    a> a[0] Ω (omega) is best case
    b> a[3] Θ (theta) is average case
    c> a[6] O (Big O) is worst case

    # O(n) Fair Case
        function logItems(n) {
            # O(n)
            for (let i = 0; i < n; i++) {
               console.log(i)
            }
        
            # O(2n) 
            for (let j = 0; j < n; j++) {
            console.log(j)
            }
        }
    a> loop runs n time only =  O(n)

    # O(n2) Horrible Case
        function logItems(n) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                for(let k = 0; k < n; k++) {
                        console.log(i, j, k) 
                    }       
                }       
            } 
        }
    a> Loop is nested = O(n2)

    # O(1) Best case
        function addItems(n) {
        return n + n + n
        }
    a> constant operations = O(1)

    # O(log n) Good case. Devide and conqurer 
        let a = [1,2,3... n]
        ? find elem 3 from array
    a> split array in half > find 3. Not found? = split half cutted array in half > find 3.     etc...
    b> ex. 2 power of 31 = a Billion

    # n = 100
        a> O(1) = 1
        b> O(log n) = 7 approx. 2 power of 7 = 128
    c> O(n) = 100
    d> O(n2) = 10000 (n * n)


# 2. Linked list
    - often compares with Arrays.
    - HEAD & TAIL where Head points to the first element and Tail points to last.
    - values is spreaded all over the memory (Not like continues arrays [0,1...], but saved anywhere random place in memory.)

    Ex> 11, 3, 23, 7, 4
    a> Head = 11 && Tail = 4
    {
        head: {
            value: 11, # Head  
            next: {
                value: 3,
                next: {
                    value: 23,
                    next: {
                        value: 7,
                        next: {
                            value: 4, # Tail  
                            next: null 
                        }
                    }
                }
            }
        }
    }

# 3. Stacks LIFO (bundle of plates one upon another)
    - Pipe of tennis balls.
    - Push and Pop, using Linked list.
    - Top (head in linked list) element in stack.

# 4. Queue FIFO (line of people)
    - Push to one side and Pop from other end.
    - Enqueue (push element to last)
    - Dequeue (remove element from first)

# 5. Tree
    - 1> Binary tree (left and right node)
        - Has top node, children (siblings), and leaf nodes (who dosen't have childrens)
        - Cut tree in half. assign elements left or right based on top element.

# 6. Hash tables
    - Key value pairs
    - Hash Math function
    - Very Efficient

# 7. Graph
    - Non linier data structure made of vertex & edges
    - vertex = Node
    - Edges = Bidirectional connection of nodes

# 8. Recursion
    - Function that calls itself untill it reaches base case.
    - Base case (stop condition)
    - Recursive case (function calls itself)

# 9. Sorting
    - Bubble sort: compare two elements and swap if needed. Repeat untill sorted.
    - Selection sort: find smallest element and swap with first element. Repeat untill sorted.
    - Insertion sort: take element and insert in correct place. Repeat untill sorted.
    - Merge sort: split array in half untill only one element left. Then merge back in sorted order = O(n * log(n))
    - Quick sort: pick pivot element and sort elements around it. Repeat untill sorted.
    - Radix sort: sort by each digit. Repeat untill sorted.