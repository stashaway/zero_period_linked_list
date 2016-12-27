


function linked_list(){
  this.head = null;
  this.current = null;
  this.count = 0;
  this.add_list_item = function(data_payload){
    //create new object
    // set new_obj val to data_payload
    // set new object next to null
    var new_obj = {
      value: data_payload,
      next: null
    }
    //if current is not null
      // set current next to new object 
    //else 
      // HEAD = new_obj
    //set current to new object
    //increment count
    //returns count
    if(this.current!=null){
      this.current.next = new_obj;
    }
    else{
      this.head = new_obj;
    }
    this.current = new_obj;
    this.count++;
    return this.count;

  }
  this.get_current_value = function(){
    if(this.is_list_empty()){
      return false;
    }
    return this.current.value;
  	//return the value of the current link list node
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
  	//walk to the next item in the list
  	//returns the value of the item walked to
  	//if there are no other items, it returns false
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
  	//moves the list pointer back to the beginning of the list
  	//returns true if accomplished, or false if the list is empty
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


