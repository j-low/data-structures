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

treeMethods.contains = function(target, result){
  result = result || false;
  if(this.value === target) {
    result =  true;
  }
  else{
    if(this.children.length>0){
      for(var child = 0; child < this.children.length; child++) {
        result =  this.children[child].contains(target, result);
      }
    }
  }
  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


//var startNode = makeTree(1);
//startNode.addChild(2);
//startNode.children
