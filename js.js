function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );


  let ask = (question, yes, no) => {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
  }

 ask(
    "Вы согласны?",
    () => alert('yes'),
    () => alert('no')
 )

 for(let i = 0; i<10; i++ ) {
    if( i % 2 == 1){
        continue
    }
    console.log(i)
    
 }