const heroines = [
    {id: 10, name: 'depika'},
    {id: 20, name: 'rani'},
    {id: 30, name: 'kajol'},
    {id: 40, name: 'madhuri'}
];

const nameResult = heroines.map(h => h.name);
const idResult = heroines.map(h => h.id);
console.log(nameResult);
console.log(idResult);

const bigger = heroines.filter(h => h.id > 20);
console.log(bigger);

const biggerOne = heroines.find(h => h.id > 20);
console.log(biggerOne);

//using for loop
const heroes = [
    {id: 1, name: 'shakib khan'},
    {id: 2, name: 'salman khan'},
    {id: 3, name: 'amir khan'}
];
const heroName = [];
const heroId = [];

for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i];
    const result = element.name;
    const id = element.id;
    heroName.push(result);
    heroId.push(id);
}
console.log(heroName);
console.log(heroId);