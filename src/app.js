window.onload = () => {
  
  let button = document.querySelector('#btn');

  button.addEventListener('click', () => {
    let excuse = document.querySelector('#the-excuse');
    excuse.innerHTML = generateExcuse();
  })
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let subject = ['My friend', 'The dog', 'A bird', 'Her turtle'];
  let action = ['ate my', 'broke my', 'stole my', 'took my'];
  let what = ['keys', 'homework', 'shoe', 'car', 'book'];
  let where = ['on the street', 'in the office', 'in class', 'in the house']; 

  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex =Math.floor(Math.random() * where.length);

  return `${subject[subjIndex]} ${action[actionIndex]} ${what[whatIndex]} ${where[whereIndex]}`;
}