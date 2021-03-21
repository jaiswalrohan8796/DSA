# Using Array 
def createStack():
    stack = []
    return stack
 
# Stack is empty when stack size is 0
def isEmpty(stack):
    return len(stack) == 0
 
# Function to add an item to stack. It increases size by 1
def push(stack, item):
    stack.append(item)
    print(item + " pushed to stack ")
     
# Function to remove an item from stack. It decreases size by 1
def pop(stack):
    if (isEmpty(stack)):
        print("Stack is empty")
        return  
    return stack.pop()
 
# Function to return the top from stack without removing it
def peek(stack):
    if (isEmpty(stack)):
        print("Stack is empty")
        return
    return stack[len(stack) - 1]

#->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->->

# Using SingleLinkedList

class StackNode:
 
    # Constructor to initialize a node
    def __init__(self, data):
        self.data = data
        self.next = None
 
 
class Stack:
 
    # Constructor to initialize the start of linked list
    def __init__(self):
        self.start = None
 
    def isEmpty(self):
        return True if self.start is None else False
 
    def push(self, data):
        newNode = StackNode(data)
        newNode.next = self.start
        self.start = newNode
        print "% d pushed to stack" % (data)
 
    def pop(self):
        if (self.isEmpty()):
            return float("-inf")
        temp = self.start
        self.start = self.start.next
        popped = temp.data
        return popped
 
    def peek(self):
        if self.isEmpty():
            return float("-inf")
        return self.start.data
 
