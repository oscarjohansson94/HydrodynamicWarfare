var map1 = [
  {x: 100 ,y: 300,reg: 1,scale: 1,units: 100,owner: ownerEnum.PLAYER, AI: null },
  {x: 550 ,y: 100,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE, AI: null },
  {x: 550 ,y: 300,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE, AI: null },
  {x: 550 ,y: 500,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE, AI: null },
  {x: 1000 ,y: 300,reg: 1,scale: 1, units: 35,owner: ownerEnum.AI1 , AI: aiEnum.DUMB},
];

var map2 = [
  {x: 100 ,y: 300,reg: 1,scale: 1,units: 100,owner: ownerEnum.PLAYER, AI: null },
  {x: 550 ,y: 100,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE, AI: null },
  {x: 550 ,y: 300,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE, AI: null },
  {x: 550 ,y: 500,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE, AI: null },
  {x: 1000 ,y: 200,reg: 1,scale: 1, units: 35,owner: ownerEnum.AI1 , AI: aiEnum.DUMB},
  {x: 1000 ,y: 400,reg: 1,scale: 1, units: 35,owner: ownerEnum.AI1 , AI: aiEnum.DUMB},
];

var map3 = [
  {x: 100 ,y: 200,reg: 1,scale: 1,units: 75,owner: ownerEnum.AI1, AI: aiEnum.DUMB },
  {x: 100 ,y: 400,reg: 1,scale: 1,units: 75,owner: ownerEnum.AI1, AI: aiEnum.DUMB },
  {x: 550 ,y: 100,reg: 1,scale: 1, units:100 ,owner: ownerEnum.PLAYER, AI: null },
  {x: 550 ,y: 300,reg: 1,scale: 1, units:100 ,owner: ownerEnum.PLAYER, AI: null },
  {x: 550 ,y: 500,reg: 1,scale: 1, units:100 ,owner: ownerEnum.PLAYER, AI: null },
  {x: 1000 ,y: 200,reg: 1,scale: 1, units: 75,owner: ownerEnum.AI1 , AI: aiEnum.DUMB},
  {x: 1000 ,y: 400,reg: 1,scale: 1, units: 75,owner: ownerEnum.AI1 , AI: aiEnum.DUMB},
];

var map4 = [
  {x: 100 ,y: 150,reg: 1,scale: 0.75,units: 100,owner: ownerEnum.PLAYER, AI: null },
  {x: 100 ,y: 50,reg: 1,scale: 1,units: 100,owner: ownerEnum.PLAYER, AI: null },
  {x: 250 ,y: 50,reg: 1,scale: 0.75,units: 100,owner: ownerEnum.PLAYER, AI: null },

  {x: 600 ,y: 150,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE, AI: null },
  {x: 600 ,y: 300,reg: 1,scale: 1, units:150 ,owner: ownerEnum.NONE, AI: null }, //<---
  {x: 600 ,y: 450,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE, AI: null },
  {x: 450 ,y: 300,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE, AI: null },
  {x: 750 ,y: 300,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE, AI: null },

  {x: 850 ,y: 50,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI1 , AI: aiEnum.DUMB},
  {x: 1000 ,y: 50,reg: 1,scale: 1, units: 100,owner: ownerEnum.AI1 , AI: aiEnum.DUMB},
  {x: 1000 ,y: 150,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI1 , AI: aiEnum.DUMB},

  {x: 850 ,y: 550,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI2 , AI: aiEnum.DUMB},
  {x: 1000 ,y: 550,reg: 1,scale: 1, units: 100,owner: ownerEnum.AI2 , AI: aiEnum.DUMB},
  {x: 1000 ,y: 450,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI2 , AI: aiEnum.DUMB},

  {x: 250 ,y: 550,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI3 , AI: aiEnum.DUMB},
  {x: 100 ,y: 550,reg: 1,scale: 1, units: 100,owner: ownerEnum.AI3 , AI: aiEnum.DUMB},
  {x: 100 ,y: 450,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI3 , AI: aiEnum.DUMB},
];
