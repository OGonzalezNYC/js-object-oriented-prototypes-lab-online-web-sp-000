// function BoardMember(name, homeState, training) {
//   this.name = name;
//   this.homeState = homeState;
//   this.training = training;
// }

// BoardMember.prototype.veto = function() {
//   return "No, I must disagree"
// }


// BoardMember.prototype.approve = function() {
//   return "You can do that!"
// }


// BoardMember.prototype.doCharity = function() {
//   return "I like to help people."
// }


// BoardMember.prototype.releasePressStatement = function() {
//   return "You will see great things from Scuber."
// }

// BoardMember.prototype.sayHi = function() {
//   return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
// }

function BoardMember (name, homeState, training) {
  this.name = name;
  
  this.training = training;
  this.homeState = homeState;
}
  
Boardmember.prototype.veto = function() {
    return "No, I must must disagree";
}

Boardmember.prototype.approve = function() {
  return "You can do that!"
}

BoardMember.prototype.doCharity = function() {
  return "I like to help people."
}

BoardMember.prototype.releasePressStatement = function() {
  return "You will see great things from Scuber."
}

BoardMember.prototype.sayHi = function () {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}