
const uniqid = require('uniqid');
const cubes = [
   {
      id: '5gdwyi4vidhjldad',
      name: 'Mirror cube', 
      description: 'A cool cube', 
      imageUrl: 'https://m.media-amazon.com/images/I/71TrvUl50OL.jpg', 
      difficultyLevel: 4
   }
   
];

exports.getAll = (search, from, to) => {
   let result  =cubes.slice();
   if(search){
      result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
   }

   if(from){
      result = result.filter(cube => Number(cube.difficultyLevel) >= Number(from));
   }

   if(to){
      result = result.filter(cube => Number(cube.difficultyLevel) <= Number(to));
   }
   
   return result;
};
exports.getOne = (cubeId) => cubes.find(c => c.id == cubeId);


exports.create = (cubeData) => {
   const newCube = {
    id: uniqid(),
    ...cubeData,
   };
cubes.push(newCube);
return newCube;
};

