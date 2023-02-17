class Person {
  constructor(paramName) {
    this.name = paramName;
  }
}

class Priest extends Person {
  constructor(paramName, paramParish) {
    super(paramName);
    this.parish = paramParish;
  }

  pray() {
    console.log('DEUS VULT');
  }
}

class Bishop extends Priest {
  constructor(paramName, paramRegion) {
    super(paramName, null);
    this.hasCatedral = true;
    this.region = paramClericalRegion;
    this.hasProvince = true;
  }
}

class Cardinal extends Bishop {
  constructor(paramName, paramClericalCountry) {
    super(paramName, paramClericalCountry);
    this.hasProvince = false;
    this.hasCountry = true;
  }

  vote(paramVote) {
    return null;
  }

}

class Pope extends Cardinal {
  constructor(paramName) {
    super(paramName, 'universe');
    this.hasProvince = false;
    this.hasCountry = false;
  }

  becamePope(paramNewName) {
    this.name = paramNewName;
  }
}