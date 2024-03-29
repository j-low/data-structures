var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 this.index = 0;
 this.front = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.index + this.front] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  if(this.index > 0) {
    this.index--;
  }

  var result = this[this.front];
  delete this[this.front];

  this.front++;

  return result;

};

Queue.prototype.size = function() {
  return this.index;
};
