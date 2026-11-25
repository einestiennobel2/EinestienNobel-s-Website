const elements = [];

function addElement(name,ing1,ing2,color,orig) {
  elements.splice(elements.length,0,{"name":name,"ing1":ing1,"ing2":ing2,"color":color,"default": Boolean(orig)});
};

addElement("Earth",null,null,0xb19a81,true);
addElement("Fire","Fire","Fire",0xf6b26b,true);
