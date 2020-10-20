let defaultOwner = {firstName: 'Martin', lastName: 'Fowler'}

function getDefaultOwner() {return defaultOwner};
function setDefaultOwner(arg) {defaultOwner = arg};

spaceship.owner = getDefaultOwner;

defaultOwner = setDefaultOwner({ firstName: 'Rebecca', lastName: 'Parsons' });
