const user = {
  name: 'Ilya',
  age: '26',
  title: '26asdasd',
};


function isEmpty(someObject) {
  return Object.keys(someObject).length === 0;
}

const empty = isEmpty({});
console.log(empty);
if (empty) {
  console.error('Object is empty');
}