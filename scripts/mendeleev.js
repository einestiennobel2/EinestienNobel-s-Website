const elements = [];

function addElement(name,ing1,ing2,color) {
  elements.splice(elements.length,0,{"name":name,"ing1":ing1,"ing2":ing2,"color":color});
};

addElement("Earth",null,null,0xb19a81);
