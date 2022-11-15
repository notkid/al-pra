/**
 * 23. 合并K个升序链表
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {

};


/**
 * 最大堆
 */

function left(i) {
    return (i* 2) + 1
}
function right(i) {
    return (i* 2)+ 2
}
function swap(A, i, j) {
    const t = A[i]
    A[i] = A[j]
    A[j] = t
}

class Heap2 {
    constructor(arr) {
        this.data = [...arr]
        this.size = this.data.length
        this.rebuildHeap = this.rebuildHeap.bind(this)
        this.isHeap = this.isHeap.bind(this)
        this.sort = this.sort.bind(this)
        this.insert = this.insert.bind(this)
        this.delete = this.delete.bind(this)
        this.maxHeapify = this.maxHeapify.bind(this)
    }

    rebuildHeap() {
        const L = Math.floor(this.size /2)
        for(let i = L- 1; i>=0;i--) {
            this.maxHeapify(i)
        }
    }
    isHeap() {
        const L = Math.floor(this.size /2)
        for(let i = L -1; i>=0;i--) {
            const l = this.data[left(i)] || Number.MAX_SAFE_INTEGER
            const r = this.data[right(i)] || Number.MAX_SAFE_INTEGER
            const max = Math.max(this.data[i], l , r)
            if (max !== this.data[i]) {
                return false
            }
            return true
        }
    }

    sort() {
        for(let i = this.size - 1; i> 0; i--) {
            swap(this.data, 0, i)
            this.size--
            this.maxHeapify(0)
        }
    }

    insert(key) {
        this.data[this.size++] = key
        if (this.isHeap()) {
            return
        }
        this.rebuildHeap()
    }

    delete(index) {
        if (index >= this.size) {
            return
        }
        this.data.splice(index, 1)
        this.size--
        if (this.isHeap()) {
            return
        }
        this.rebuildHeap()
    }

    maxHeapify(i) {
        let max = i
        if (i >= this.size) {
            return
        }
        const l = left(i)
        const r = right(i)
        if (l < this.size && this.data[i] > this.data[max]) {
            max = l
        }

        if (r < this.size && this.data[r] > this.data[max]) {
            max = r
        }

        if (max === i ) {
            return 
        }
        swap(this.data, i , max)
        return this.maxHeapify(max)
    }
}

class Heap {
    constructor(comparator = (a, b) => a - b, data = []) {
        this.data = data;
        this.comparator = comparator;//比较器
        this.heapify();//堆化
    }

    heapify() {
        if (this.size() < 2) return;
        for (let i = Math.floor(this.size()/2)-1; i >= 0; i--) {
            this.bubbleDown(i);//bubbleDown操作
        }
    }

    peek() {
        if (this.size() === 0) return null;
        return this.data[0];//查看堆顶
    }

    offer(value) {
        this.data.push(value);//加入数组
        this.bubbleUp(this.size() - 1);//调整加入的元素在小顶堆中的位置
    }

    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;//交换第一个元素和最后一个元素
            this.bubbleDown(0);//bubbleDown操作
        }
        return result;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;//父节点的位置
            //如果当前元素比父节点的元素小，就交换当前节点和父节点的位置
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);//交换自己和父节点的位置
                index = parentIndex;//不断向上取父节点进行比较
            } else {
                break;//如果当前元素比父节点的元素大，不需要处理
            }
        }
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1;//最后一个节点的位置
        while (true) {
            const leftIndex = index * 2 + 1;//左节点的位置
            const rightIndex = index * 2 + 2;//右节点的位置
            let findIndex = index;//bubbleDown节点的位置
            //找出左右节点中value小的节点
            if (
                leftIndex <= lastIndex &&
                this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex <= lastIndex &&
                this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);//交换当前元素和左右节点中value小的
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(index1, index2) {//交换堆中两个元素的位置
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    size() {
        return this.data.length;
    }
}

var mergeKLists = function(lists) {
    const res = new ListNode(0);
    let p = res;
    const h = new Heap(comparator = (a, b) => a.val - b.val);
    lists.forEach(l => {//插入每个链表的第一个节点
        if(l) h.offer(l);
    })
    while(h.size()) {//
        const n = h.poll();//取出最小值
        p.next = n;//最小值加入p的next后
        p = p.next;//移动p节点
        if(n.next) h.offer(n.next);//插入最小节点的后一个节点
    }
    return res.next;
};
