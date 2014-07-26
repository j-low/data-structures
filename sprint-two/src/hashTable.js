var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit)
  var bucket = this._storage.get(i);

  if(!bucket) {
    this._storage.set(i, [[k,v]]);
  } else {
    bucket.push([k,v]);
  }

  // this._storage.each(function(storageI , i , storage) {
  //   if (storageI){
  //     console.log(storageI)
  //     console.log(i);
  //     console.log(storage);
  //   }
  // })


  // this._storage.set(i, value);


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  for(var j = 0; j < bucket.length; j++) {
    //check k === key in sub arrays of bucket
    if(bucket[j][0] === k) {
      return bucket[j][1];
    }
  }

  // bucket.each(function(subArr) {
  //   if(subArr[0] === k) {
  //     return subArr[1];
  //   }
  // });


};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  for(var j = 0; j < bucket.length; j++ ) {
    if(bucket[j][0] === k) {
      bucket[j][1] = null;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
