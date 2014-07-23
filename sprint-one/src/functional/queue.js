var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage['0'];
    var counter = 0;
    delete storage['0'];

    for(var key in storage){
      var newKey = parseInt(key) - 1;
      storage[newKey] = storage[key];
      counter++;
    }
    size = counter;
    return result;

  };

  someInstance.size = function(){


    return size;
  };

  return someInstance;
};
