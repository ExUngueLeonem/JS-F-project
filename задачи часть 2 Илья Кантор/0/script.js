function a() {
    var name = 'John Doe';
    //console.log(this, 'a');
    function b() {
        //console.log(this, 'b');
      return name;
    }
    
    
    return b;
  }
  
   
  var c = a();
  
  c();
  

  //a()()