var map1 = {
  cactus: [
  {x: 100 ,y: 300,reg: 1,scale: 1,units: 100,owner: ownerEnum.PLAYER},
  {x: 550 ,y: 100,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE},
  {x: 550 ,y: 300,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE},
  {x: 550 ,y: 500,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE},
  {x: 1000 ,y: 300,reg: 1,scale: 1, units: 35,owner: ownerEnum.AI1 }],
  ai: {
    A1: aiEnum.DUMB
  }
};

var map2 = {
  cactus: [
  {x: 100 ,y: 300,reg: 1,scale: 1,units: 100,owner: ownerEnum.PLAYER},
  {x: 550 ,y: 100,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE},
  {x: 550 ,y: 300,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE},
  {x: 550 ,y: 500,reg: 1,scale: 1, units:30 ,owner: ownerEnum.NONE},
  {x: 1000 ,y: 200,reg: 1,scale: 1, units: 35,owner: ownerEnum.AI1},
  {x: 1000 ,y: 400,reg: 1,scale: 1, units: 35,owner: ownerEnum.AI1}
],
  ai: {
    A1: aiEnum.DUMB
  }
};

var map3 = {
  cactus: [
  {x: 100 ,y: 200,reg: 1,scale: 1,units: 75,owner: ownerEnum.AI1},
  {x: 100 ,y: 400,reg: 1,scale: 1,units: 75,owner: ownerEnum.AI1},
  {x: 550 ,y: 100,reg: 1,scale: 1, units:100 ,owner: ownerEnum.PLAYER},
  {x: 550 ,y: 300,reg: 1,scale: 1, units:100 ,owner: ownerEnum.PLAYER},
  {x: 550 ,y: 500,reg: 1,scale: 1, units:100 ,owner: ownerEnum.PLAYER},
  {x: 1000 ,y: 200,reg: 1,scale: 1, units: 75,owner: ownerEnum.AI1},
  {x: 1000 ,y: 400,reg: 1,scale: 1, units: 75,owner: ownerEnum.AI1}
],
  ai: {
    A1: aiEnum.DUMB
  }
};

var map4 = {
  cactus: [
  {x: 100 ,y: 150,reg: 1,scale: 0.75,units: 100,owner: ownerEnum.PLAYER},
  {x: 100 ,y: 50,reg: 1,scale: 1,units: 100,owner: ownerEnum.PLAYER},
  {x: 250 ,y: 50,reg: 1,scale: 0.75,units: 100,owner: ownerEnum.PLAYER},

  {x: 600 ,y: 150,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE},
  {x: 600 ,y: 300,reg: 1,scale: 1, units:150 ,owner: ownerEnum.NONE},
  {x: 600 ,y: 450,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE},
  {x: 450 ,y: 300,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE},
  {x: 750 ,y: 300,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE},

  {x: 850 ,y: 50,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI1},
  {x: 1000 ,y: 50,reg: 1,scale: 1, units: 100,owner: ownerEnum.AI1},
  {x: 1000 ,y: 150,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI1},

  {x: 850 ,y: 550,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI2},
  {x: 1000 ,y: 550,reg: 1,scale: 1, units: 100,owner: ownerEnum.AI2},
  {x: 1000 ,y: 450,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI2},

  {x: 250 ,y: 550,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI3},
  {x: 100 ,y: 550,reg: 1,scale: 1, units: 100,owner: ownerEnum.AI3},
  {x: 100 ,y: 450,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI3}
],
  ai: {
    A1: aiEnum.DUMB,
    A2: aiEnum.DUMB,
    A3: aiEnum.DUMB
  }
};

var map5 = {
  cactus: [
  {x: 100 ,y: 150,reg: 1,scale: 0.75,units: 100,owner: ownerEnum.PLAYER},
  {x: 100 ,y: 50,reg: 1,scale: 1,units: 100,owner: ownerEnum.PLAYER},
  {x: 250 ,y: 50,reg: 1,scale: 0.75,units: 100,owner: ownerEnum.PLAYER},

  {x: 600 ,y: 150,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE},
  {x: 600 ,y: 300,reg: 1,scale: 1, units:150 ,owner: ownerEnum.NONE},
  {x: 600 ,y: 450,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE},
  {x: 450 ,y: 300,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE},
  {x: 750 ,y: 300,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.NONE},

  {x: 850 ,y: 550,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI1},
  {x: 1000 ,y: 550,reg: 1,scale: 1, units: 100,owner: ownerEnum.AI1},
  {x: 1000 ,y: 450,reg: 1,scale: 0.75, units: 100,owner: ownerEnum.AI1},

],
  ai: {
    A1: aiEnum.DEFENSIVE
  }
};

var map6 = {
  cactus: [
  {x: 600 ,y: 150,reg: 1,scale: 0.75, units:100 ,owner: ownerEnum.PLAYER},
  {x: 600 ,y: 450,reg: 1,scale: 0.75, units:100 ,owner: ownerEnum.PLAYER},
  {x: 450 ,y: 300,reg: 1,scale: 0.75, units:100 ,owner: ownerEnum.PLAYER},
  {x: 750 ,y: 300,reg: 1,scale: 0.75, units:100 ,owner: ownerEnum.PLAYER},

  {x: 600 ,y: 300,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.AI1},
  {x: 750 ,y: 450,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.AI1},
  {x: 750 ,y: 150,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.AI1},
  {x: 450 ,y: 150,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.AI1},
  {x: 450 ,y: 450,reg: 1,scale: 0.75, units:75 ,owner: ownerEnum.AI1},

  {x: 300 ,y: 380,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.NONE},
  {x: 900 ,y: 380,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.NONE},
  {x: 300 ,y: 200,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.NONE},
  {x: 900 ,y: 200,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.NONE},

],
  ai: {
    A1: aiEnum.OFFENSIVE
  }
};

var map7 = {
  cactus: [
  {x: 1120/2 ,y: 50,reg: 1,scale: 0.75, units:100 ,owner: ownerEnum.PLAYER},

  {x: 1120/2-288.7 ,y: 550,reg: 1,scale: 0.75, units:100 ,owner: ownerEnum.AI1},

  {x: 1120/2+288.7 ,y: 550,reg: 1,scale: 0.75, units:100 ,owner: ownerEnum.AI2},


  {x: 1120/2 ,y: 550,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.NONE},
  {x: 1120/2-144.3 ,y: 300,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.NONE},
  {x: 1120/2+144.3 ,y: 300,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.NONE},
  {x: 1120/2 ,y: 50+500*2/3,reg: 1,scale: 1.5, units:200 ,owner: ownerEnum.NONE},



],
  ai: {
    A1: aiEnum.OFFENSIVE,
    A2: aiEnum.DEFENSIVE
  }
};



var map8 = {
  cactus: [
  {x: 300 ,y: 90,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.PLAYER},
  {x: 500 ,y: 90,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.PLAYER},
  {x: 700 ,y: 90,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.PLAYER},
  {x: 900 ,y: 90,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.PLAYER},

  {x: 300 ,y: 240,reg: 1,scale: 0.75, units:25 ,owner: ownerEnum.NONE},
  {x: 500 ,y: 240,reg: 1,scale: 0.75, units:25 ,owner: ownerEnum.NONE},
  {x: 700 ,y: 240,reg: 1,scale: 0.75, units:25 ,owner: ownerEnum.NONE},
  {x: 900 ,y: 240,reg: 1,scale: 0.75, units:25 ,owner: ownerEnum.NONE},

  {x: 300 ,y: 390,reg: 1,scale: 0.75, units:25 ,owner: ownerEnum.NONE},
  {x: 500 ,y: 390,reg: 1,scale: 0.75, units:25 ,owner: ownerEnum.NONE},
  {x: 700 ,y: 390,reg: 1,scale: 0.75, units:25 ,owner: ownerEnum.NONE},
  {x: 900 ,y: 390,reg: 1,scale: 0.75, units:25 ,owner: ownerEnum.NONE},

  {x: 300 ,y: 540,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.AI1},
  {x: 500 ,y: 540,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.AI1},
  {x: 700 ,y: 540,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.AI1},
  {x: 900 ,y: 540,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.AI1},

],
  ai: {
    A1: aiEnum.OFFENSIVE
  }
};

var map9 = {
  cactus: [

  {x: 900 ,y: 90,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.PLAYER},

  {x: 800 ,y: 165,reg: 1,scale: 0.75, units:25 ,owner: ownerEnum.NONE},

  {x: 700 ,y: 240,reg: 1,scale: 0.75, units:20 ,owner: ownerEnum.NONE},

  {x: 600 ,y: 315,reg: 1,scale: 0.75, units:15 ,owner: ownerEnum.NONE},

  {x: 500 ,y: 390,reg: 1,scale: 0.75, units:10 ,owner: ownerEnum.NONE},

  {x: 400 ,y: 465,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.NONE},

  {x: 400 ,y: 540,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.NONE},

  {x: 300 ,y: 465,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.NONE},

  {x: 300 ,y: 540,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.AI1},

],
  ai: {
    A1: aiEnum.SMART
  }
};

var map10 = {
  cactus: [

  {x: 900 ,y: 90,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.PLAYER},
  {x: 800 ,y: 165,reg: 1,scale: 0.75, units:25 ,owner: ownerEnum.NONE},

  {x: 700 ,y: 240,reg: 1,scale: 0.75, units:20 ,owner: ownerEnum.NONE},
  {x: 500 ,y: 240,reg: 1,scale: 0.75, units:10 ,owner: ownerEnum.NONE},
  {x: 700 ,y: 390,reg: 1,scale: 0.75, units:10 ,owner: ownerEnum.NONE},
  {x: 600 ,y: 315,reg: 1,scale: 0.75, units:15 ,owner: ownerEnum.NONE},
  {x: 400 ,y: 165,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.NONE},
  {x: 800 ,y: 465,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.NONE},
  {x: 500 ,y: 390,reg: 1,scale: 0.75, units:10 ,owner: ownerEnum.NONE},
  {x: 400 ,y: 465,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.NONE},

  {x: 400 ,y: 75,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.NONE},
  {x: 300 ,y: 75,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.AI2},
  {x: 300 ,y: 165,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.NONE},

  {x: 400 ,y: 540,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.AI1},
  {x: 300 ,y: 465,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.AI1},
  {x: 300 ,y: 540,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.AI1},

  {x: 800 ,y: 540,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.NONE},
  {x: 900 ,y: 465,reg: 1,scale: 0.75, units:5 ,owner: ownerEnum.NONE},
  {x: 900 ,y: 540,reg: 1,scale: 0.75, units:50 ,owner: ownerEnum.AI3},

],
  ai: {
    A1: aiEnum.OFFENSIVE,
    A2: aiEnum.SMART,
    A3: aiEnum.SMART

  }
};
