var sll = require('./sll');


var mysll = new sll();

mysll.add(1);
mysll.add(2);
mysll.add(3);

mysll.remove = function () {

  console.log('remove');

}

mysll.remove()
