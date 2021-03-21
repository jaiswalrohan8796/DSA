# Using Array

def createQueue():
    queue = []
    return queue 

def isEmpty(queue):
    return len(queue) == 0

def length(queue):
    return len(queue)

def enqueue(queue,data):
    queue.append(data)

def dequeue(queue):
    if (isEmpty(queue)):
        print("Queue is empty")
        return
    else:
        popped = queue.pop(0)
        return popped

def queueFront(queue):
    if (isEmpty(queue)):
        print("Queue is empty")
        return
    else:
        item = queue[0]
        return item

def queueRear(queue):
    if (isEmpty(queue)):
        print("Queue is empty")
        return
    else:
        item = queue[-1]
        return item
    
#->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->
# Using linkedList

class Node: 
    def __init__(self, data): 
        self.data = data 
        self.next = None
  
# A class to represent a queue 
  
# The queue, front stores the front node 
# of LL and rear stores the last node of LL 
class Queue: 
    def __init__(self): 
        self.front = self.rear = None
  
    def isEmpty(self): 
        return self.front == None
      
    # Method to add an item to the queue 
    def EnQueue(self, item): 
        temp = Node(item) 
          
        if self.rear == None: 
            self.front = self.rear = temp 
            return
        self.rear.next = temp 
        self.rear = temp 
  
    # Method to remove an item from queue 
    def DeQueue(self): 
          
        if self.isEmpty(): 
            return
        temp = self.front 
        self.front = temp.next
  
        if(self.front == None): 
            self.rear = None
  
# Driver Code 
if __name__== '__main__': 
    q = Queue() 
    q.EnQueue(10) 
    q.EnQueue(20) 
    q.DeQueue() 
    q.DeQueue() 
    q.EnQueue(30) 
    q.EnQueue(40) 
    q.EnQueue(50)  
    q.DeQueue()    
    print("Queue Front " + str(q.front.data)) 
    print("Queue Rear " + str(q.rear.data)) 
