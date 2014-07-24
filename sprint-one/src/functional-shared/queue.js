var makeQueue = function(){

  var someInstance= {};

  someInstance.index = 0;
  someInstance.front = 0;
  _.extend(someInstance, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return someInstance;
};

var queueMethods = {

  "enqueue": function(value){
    this[this.index + this.front] = value;
    this.index++;
  },

  "dequeue": function(){
  if(this.index > 0){
    this.index--;
  }

  var result = this[this.front];

  delete this[this.front];
  this.front++;

  return result;
  },

  "size": function(){
    return this.index;
  }


};



