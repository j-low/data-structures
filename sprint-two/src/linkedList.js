var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);

    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }

  };

  list.removeHead = function(){
    var choppedHead = this.head.value;
    var newHead = this.head.next;
    this.head = newHead;
    return choppedHead;
  };

  list.contains = function(target){
    var current = this.head;
    if(current.value === target){
      return true;
    }
    else{
    while(current.next){
      current = current.next;
      if(current.value === target) {
        return true;
      }
    }
  }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
