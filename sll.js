// sll in js for export

function Node(val){
  this.val = val;
  this.next = null;
}

function SLL(){

  this.length = 0;
  this.head = null;


  this.add = function(val){
  
    var node = new Node(val);

    if(this.head === null){

      this.head = node;

    } else {

      runner = this.head;

      while(runner.next){

        runner = runner.next;     
      }

      runner.next = node;
      
    }

    this.length++;

  };

}

module.exports = SLL;
