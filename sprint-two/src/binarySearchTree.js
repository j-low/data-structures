var makeBinarySearchTree = function(value){
  var newTree = Object.create(binaryTreeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert  = function(value) {
  var tree = makeBinarySearchTree(value);
  if(value < this.value) {
    this.left = this.left ? this.left.insert(value) : tree;
  } else if(value > this.value) {
    this.right = this.right ? this.right.insert(value) : tree;
  }
  return this;
};


binaryTreeMethods.contains = function(value) {
  var hasValue = false;
  this.valueInTree = function(val) {
    if(val < this.value) {
      hasValue = this.left ? this.left.valueInTree(val) : false;
    } else if (val > this.value) {
      hasValue = this.right ? this.right.valueInTree(val) : false;
    } else {
     hasValue = true;
    }
    return hasValue;
  }(value);

};

binaryTreeMethods.depthFirstLog  = function(callback) {};


/*
 * Complexity: What is the time complexity of the above functions?
 */

