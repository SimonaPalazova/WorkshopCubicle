const e = require('express');
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

exports.getAll = () => cubes.slice();
exports.getOne = (cubeId) => cubes.find(c => c.id == cubeId);


exports.create = (cubeData) => {
   const newCube = {
    id: uniqid(),
    ...cubeData,
   };
cubes.push(newCube);
return newCube;
};

