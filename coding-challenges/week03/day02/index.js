var players = [
    {name:"Roger Federer",rank:1},
    {name:"Refel Nadal",rank:2},
    {name:"Nalbandian",rank:12},
    {name:"Andy Murray",rank:14},
    {name:"Andy Roddick",rank:4},
    {name:"Pete Sampras",rank:3},
    {name:"Rod Lever",rank:190},
    {name:"Andre Agassi",rank:11},
    {name:"Novak Djokovic",rank:5},
    {name:"Arthur Ashe",rank:8},
  ];
  
  function forLoop(players){
    var len=players.length;
    for(var i=0; i<len; i++){
      if(players[i].rank<=10){
        console.log(players[i].name);
      }
    }
  }
  forLoop(players);