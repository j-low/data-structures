var makeStack = function() {
  var someInstance = {};
  // var storage = {};
  someInstance.index = 0;

  _.extend(someInstance,stackMethods);

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {

  "push" : function(value) {
    this[this.index] = value;
    this.index++;

  },
  "pop" : function() {
    if(this.index > 0){
      this.index --;
    }

    var result = this[this.index];
    delete this[this.index];
    return result;

  },
  "size" : function() {
    return this.index;
  }
};


