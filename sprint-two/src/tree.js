var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){

  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if(this.value === target) {
    return true;
  } else {
    if(this.children) {
      for(var child in this.children) {
        child.contains(target);
      }
    } else {
      return false;
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


//var startNode = makeTree(1);
//startNode.addChild(2);
//startNode.children
