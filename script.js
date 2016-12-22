


function linked_list(){
  this.head = null;
  this.current = null;
  this.count = 0;
  this.add_list_item = function(data_payload){
    //create new object
    // set new_obj val to data_payload
    // set new object next to null
    //if current is not null
      // set current next to new object 
    //else 
      // HEAD = new_obj
    //set current to new object
    //increment count
    //returns count
  }
  this.get_current_value = function(){
  	//return the value of the current link list node
  }
  this.get_next_value = function(){
  	//walk to the next item in the list
  	//returns the value of the item walked to
  	//if there are no other items, it returns false
  }
  this.rewind = function(){
  	//moves the list pointer back to the beginning of the list
  	//returns true if accomplished, or false if the list is empty
  }
}

var list = new linked_list();
list.rewind(); //returns false
list.add_list_item(1); //returns 1
list.add_list_item(3); //returns 2
list.add_list_item(8); //returns 3
console.log(list);
console.log(list.get_current_value()); //returns 8
list.rewind(); //returns true
list.get_current_value(); //returns 1
list.get_next_value(); //returns 3
list.get_current_value(); //returns 3
list.get_next_value(); //returns 8
list.get_next_value(); //returns false


