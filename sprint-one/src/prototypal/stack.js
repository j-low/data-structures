var makeStack = function() {
  var obj = Object.create(stackMethods);
  obj.index = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  return obj;
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {

  "push" : function(value){
    this[this.index] = value;
    this.index++;
  },

  "pop": function(){
    if(this.index>0){
      this.index--;
    }

    var result = this[this.index];
    delete this[this.index];
    return result;


  },

  "size":function(){
    return this.index;
  }

};


