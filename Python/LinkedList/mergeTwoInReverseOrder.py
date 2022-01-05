def mergeResult(h1,h2):
    #return head of merged list
    res = None
    while (h1 != None and h2 != None): 
      
        # If a's current value is smaller or equal to 
        # b's current value. 
        if (h1.data <= h2.data): 
          
            # Store next of current Node in first list 
            temp = h1.next
  
            # Add 'a' at the front of resultant list 
            h1.next = res 
            res = h1 
  
            # Move ahead in first list 
            h1 = temp 
          
        # If a's value is greater. Below steps are similar 
        # to above (Only 'a' is replaced with 'b') 
        else: 
          
            temp = h2.next
            h2.next = res 
            res = h2 
            h2 = temp 
          
    # If second list reached end, but first list has 
    # nodes. Add remaining nodes of first list at the 
    # front of result list 
    while (h1 != None): 
      
        temp = h1.next
        h1.next = res 
        res = h1
        h1 = temp 
      
    # If first list reached end, but second list has 
    # node. Add remaining nodes of first list at the 
    # front of result list 
    while (h2 != None): 
      
        temp = h2.next
        h2.next = res 
        res = h2 
        h2 = temp 
      
    return res 