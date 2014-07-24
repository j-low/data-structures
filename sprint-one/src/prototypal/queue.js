var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.index = 0;
  obj.front = 0;
  return obj;
};

var queueMethods = {

"enqueue":function(value){
  this[this.index+this.front] = value;
  this.index++;
},

"dequeue": function(){
  if(this.index>0){
    this.index--;
  }

  var result = this[this.front];
  delete this[this.front];
  this.front++;

  return result;
},

"size":function(){
  return this.index;
}

};


