class Node:
    def __init__(self,value):
        self.info = value
        self.link = None

class SingleLinkedList:
    def __init__(self):
        self.start = None
    
    def display_list(self):
        if self.start==None:
            print('List Empty')
        else:
            p=self.start
            while p is not None:
                print(p.info,end=' ')
                p=p.link
            print()
    def count_nodes(self):
        n=0
        p=self.start
        while p is not None:
            n+=1
            p=p.link
        print('No. of nodes: '+str(n))

    def search(self,x):
        pos=0
        p=self.start
        while p is not None:
            if (p.info==x):
                print(str(x) +' is at '+str(pos))
                return True
            pos+=1
            p=p.link
        else:
            print(str(x)+' is not found')
            return False

    def insert_in_beginning(self,data):
        temp = Node(data)
        temp.link = self.start
        self.start = temp

    def insert_at_end(self,data):
        temp = Node(data)
        if self.start is None:
            self.start = temp
            return
        p=self.start
        while p.link is not None:
            p=p.link
        p.link = temp

    def create_list(self):
        n = int(input('enter no. of elements to be inserted: '))
        if n==0:
            return
        for  i in range(n):
            data = int(input('enter the element: '))
            self.insert_at_end(data)

    def insert_after(self,data,x):
        p=self.start
        while p is not None:
            if p.info==x:
                break
            p=p.link
        if p is None:
            print(x,'not present in list')
        else:
            temp=Node(data)
            temp.link = p.link
            p.link=temp

    def insert_before(self,data,x):
        if self.start == None:
            print('list is empty')
        if x==self.start.info:
            temp=Node(data)
            temp.link=self.start
            self.start=temp
            return
        p=self.start
        while p.link is not None:
            if p.link==x:
                break
            p=p.link
        if p.link is None:
            print(x,'not present in list')
        else:
            temp = Node(data)
            temp.link=p.link
            p.link=temp

                
    def insert_at_position(self,data,k):
        if k==1:
            temp=Node(data)
            temp.link=self.start
            self.start=temp
            return
        p=self.start
        i=1
        while i<k-1 and p is not None:
            p=p.link
            i+=1
        if  p is None:
            print('you can only insert upto position',i)
        else:
            temp=Node(data)
            temp.link=p.link
            p.link=temp
            
    def delete_node(self,data):
        if self.start == None:
            print('List is empty')
            return
        if (self.start.info == data):
            self.start = self.start.link
            return
        p = self.start 
        while p.link is not None:
            if (p.link.info == data):
                break
            p = p.link
        if (p.link is None):
            print('Element not found')
            return
        else:
            p.link = p.link.link


    def delete_first_node(self):
        if (self.start is None):
            return
        self.start = self.start.link

    def delete_last_node(self):
        if (self.start is None):
            return
        if (self.start.link is None):
            self.start = None
        p = self.start
        while p.link.link is not None:
            p = p.link
        p.link = None
    def reverse_list(self):
        prev = None
        p = self.start
        while p is not None:
            next = p.link
            p.link = prev
            prev = p
            p = next
        self.start = prev
        
    def bubble_sort_exdata(self):
        end = None
        while end != self.start.link:
            p = self.start
            while p.link != end:
                q = p.link
                if p.info > q.info:
                    p.info,q.info = q.info,p.info
                p = p.link
            end = p

    def bubble_sort_exlinks(self):
        end=None
        while end!=self.start.link:
            r=p=self.start
            while p.link!=end:
                q=p.link
                if p.info>q.info:
                    p.link=q.link
                    q.link=p
                    if p!=self.start:
                        r.link=q
                    else:
                        self.start=q
                    p,q=q,p
                r=p
                p=p.link
            end=p

    def has_cycle(self):
        pass
    def find_cycle(self):
        pass
    def remove_cycle(self):
        pass
    def insert_cycle(self,x):
        pass
    def merge2(self,list2):
        pass
    def _merge2(self,p1,p2):
        pass
    def merge_sort(self):
        pass
    def _merge_sort_rec(self,listStart):
        pass
    def _divide_list(self,p):
        pass


#--------------------------------------------------------------------


list = SingleLinkedList()

list.create_list()

while True:
    print('1.Display List')
    print('2.Count the number of Nodes')
    print('3.Search for an Element')
    print('4.Insert in empty list,Insert in the beginning of the list')
    print('5.Insert a node at the end of the list')
    print('6.insert a node after a specified node')
    print('7.insert a node before a specified node')
    print('8.insert a node at a given position')
    print('9.delete first node')
    print('10.delete last node')
    print('11.delete any node')
    print('12.reverse the list')
    print('13.bubble sort by exchanging data')
    print('14.bubble sort by exchanging link')
    print('15.merge sort')
    print('16.insert cycle')
    print('17.detect cycle')
    print('18.remove cycle')
    print('19.quit')

    option = int(input('enter your choice: '))
    if option==1:
        list.display_list()
    elif option==2:
        list.count_nodes()
    elif option==3:
        data=int(input('enter element to be searched: '))
        list.search(data)
    elif option==4:
        data=int(input('enter element to be inserted: '))
        list.insert_in_beginning(data)
    elif option==5:
        data=int(input('enter element to be inserted: '))
        list.insert_at_end(data)
    elif option==6:
        data=int(input('enter element to be inserted: '))
        x=int(input('enter element after which to insert: '))
        list.insert_after(data,x)
    elif option==7:
        data=int(input('enter the element to be inserted: '))
        x=int(input('enter element before which to insert: '))
        list.insert_before(data,x)
    elif option==8:
        data=int(input('enter the element to be inserted: '))
        x=int(input('enter the position at which to insert: '))
        list.insert_at_position(data,x)
    elif option==9:
        list.delete_first_node()
    elif option==10:
        list.delete_last_node()
    elif option==11:
        data=int(input('enter the element to be deleted: '))
        list.delete_node(data)
    elif option==12:
        list.reverse_list()
    elif option==13:
        list.bubble_sort_exdata()
    elif option==14:
        list.bubble_sort_exlinks()
    elif option==15:
        list.merge_sort()
    elif option==16:
        data = int(input('enter the element at which the cycle has to be inserted: '))
        list.insert_cycle(data)
    elif option==17:
        if list.has_cycle():
            print('List has a cycle')
        else:
            print('List does not have a cycle')
    elif option==18:
        list.remove_cycle()
    elif option==19:
        break
    else:
        print('Wrong Option')
    print()

    