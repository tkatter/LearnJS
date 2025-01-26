const developer = {
    name: 'Subham Maity',
    age: 45,
    phNumber(name, number) {
      console.log(`Calling to ${name}\nThe number of ${name} is ${number}`);
    },
    sex(sex) {
      console.log(`Gender: ${sex}`);
    },
    passion: [
      {
        role: 'Mobile Development',
        devId: '2425',
        framework: ['Java', 'Kotlin', 'Flutter'],
      },
      {
        role: 'Web Development',
        devId: '2345',
        framework: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
  };
   
  console.log(`Name: ${developer.name}`);
  console.log(`Age: ${developer.age}`);
  developer.phNumber('Subham', '254563114546');
  developer.sex('Male');
  console.log(`Passion: ${JSON.stringify(developer.passion)}`);