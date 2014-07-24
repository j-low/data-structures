var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var front = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size + front] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if(size>0){
      size --;
    }

    var result = storage[front];

    delete storage[front];

    front++;

    return result;
  };

  someInstance.size = function(){


    return size;
  };

  return someInstance;
};
