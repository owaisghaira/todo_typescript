  let name: string;
  let num: number;

  let hobbies: string[];
  hobbies = ['5', '5', 'name']

  let tuple: [number, string];
  tuple = [5, 'name']

  type Person = {
    name: string,
    age?: number
  }
  let person: Person;
  person = {
    name: 'name'
  }

  let arrObj: Person[];
  arrObj = [{ name: 'owais', age: 4 }]

  let union: number | string;
  let notConfirm: unknown;

  /// type////
  type x = {
    name: string
  }
  
  type y = x & {
    age?: number;
  }
  
  let dualType: y = {
    name: 'ooo',
  }

  ///// interface ////////
  interface xi {
    name: string
  }
  
  interface yi extends xi {
    age?: number;
  }
  
  let dualInterface: yi = {
    name: 'ooo',
  }

  //// extends both type and interface
  interface ai extends y {
    group: string
  }
  
  type ia ={
    location:string
  }
  
  let bothTypeAndInterface: ia = {
      location:'nmm',
      
  }
  
  // void return undefined and never do not return  
  let printName: (name: string) => never | void;

export {}