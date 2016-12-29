//link list insertion diagram: https://docs.google.com/drawings/d/1XXDS_rn81hxdRvm-Ao-Si2q-ht3qRuOOIjpzPKkj49A/pub?w=960&h=720
//link list deletion diagram: https://docs.google.com/drawings/d/1iHibqKaeuySxS6O_38rmay2swkmUwCsw8zwWCNZtYwQ/pub?w=960&h=720


function linked_list(){
  this.head = null;
  this.current = null;
  this.count = 0;
  this.add_list_item = function(data_payload, add_to_beginning){
    if(add_to_beginning === undefined){
      add_to_beginning = false;
    }
    var new_obj = {
      value: data_payload,
      next: null,
      is_linked_list_node: true
    }

    if(!this.is_list_empty()){
      //new object's next node is set to current object's next node
      if(add_to_beginning){
        new_obj.next = head;
        head = new_obj;
      } else {
        new_obj.next = this.current.next;
        this.current.next = new_obj;
      }
    }
    else{
      this.head = new_obj;
    }
    this.current = new_obj;
    this.count++;
    return this.count;
  }
  //find a link list node based on either the value to look for, or a particular node to look for
  this.find_item = function(item){
    //determine if we are looking for an item directly, or an item's value
    //start looking at list from beginning
    //keep moving forward until either the end of the list
      //or the item or value of item is found
    //update current to point to the item (or the item that holds the value)
    //return node
  }
  //completely empty the list
  this.clear_list = function(){
    //figure it out!
  }
  this.delete_list_item = function(){
    if(this.is_list_empty()){    
      return false;
    }
    var prev = this.head;
    var temp_current = prev;
    while(temp_current.next != null && temp_current != this.current) {
      prev = temp_current;
      temp_current = temp_current.next;
    }
    prev.next = this.current.next;
    this.current.next = null;
    this.current = prev;
    this.count--;
    return this.count;
  }
  this.get_current_value = function(){
    if(this.is_list_empty()){
      return false;
    }
    return this.current.value;
  }
  this.get_next_value = function(){
    if(this.is_list_empty()){
      return false;
    }
    else if(this.current.next === null){
      console.log('at end of list');
      return false;
    }
    this.current = this.current.next;
    return this.get_current_value();
  }
  this.is_list_empty = function(){
    if(this.current===null){
      console.log('list is empty');
      return true;
    }    
  }
  this.rewind = function(){
    if(this.is_list_empty()){
      return false;
    }
    this.current = this.head;
    return true;
  }
}

var list = new linked_list();
console.log(list.rewind()); //returns false
console.log(list.add_list_item(1)); //returns 1
console.log(list.add_list_item(3)); //returns 2
console.log(list.add_list_item(8)); //returns 3
console.log(list);
console.log(list.get_current_value()); //returns 8
console.log(list.rewind()); //returns true
console.log(list.get_current_value()); //returns 1
console.log(list.get_next_value()); //returns 3
console.log(list.get_current_value()); //returns 3
console.log(list.get_next_value()); //returns 8
console.log(list.get_next_value()); //returns false

//PROBLEM SET 2
console.log(list.rewind()); //returns true
console.log(list.add_list_item(12)); //returns 4
console.log(list.rewind()); //returns true
console.log(list.get_current_value()); //returns 1
console.log(list.get_next_value()); //returns 12
console.log(list.get_current_value()); //returns 12
console.log(list.get_next_value()); //returns 3
console.log(list.get_next_value()); //returns 8
console.log(list.rewind()); //returns true
console.log(list.get_current_value()); //returns 1
console.log(list.get_next_value()); //returns 12
console.log(list.get_next_value()); //returns 3
console.log(list.get_next_value()); //returns 8
console.log(list.get_next_value()); //returns false 
console.log(list.rewind()); //returns true
console.log('should work up to here');
console.log(list.get_next_value()); //returns 12
console.log(list.delete_list_item()); //returns return 3
console.log(list.rewind()); //returns true
console.log(list.get_current_value()); //returns 1
console.log(list.get_next_value()); //returns 3
console.log(list.get_next_value()); //returns 8
console.log(list.get_next_value()); //returns false



