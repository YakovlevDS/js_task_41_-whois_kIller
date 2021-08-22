// ? Task:Караул, кто-то был убит! Тебе удалось немного сузить список подозреваемых, ведь ты знаешь, с кем в тот день виделся каждый из них.

// Функция whoIsKiller принимает обьект подозреваемых suspects, где у каждого подозреваемого есть список людей, с которыми от встречался тот день. Обьект этот выглядит вот так:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// Помимо списка подозреваемых в убийстве, функция также принимает массив жертв dead:

// ['Lucas', 'Bill']
// Тебе нужно вычислить убийцу и вернуть его имя (убийца всегда действует в одиночку). В нашем случае это James, ведь он единственный кто видел двоих убитых.

// Если убийца не найден, функция не должна ничего возвращать.

// Solution 1

function getKiller(suspects, dead) {
  let killer = false;

  for (const key in suspects) {
    dead.forEach((element) => {
      if (!suspects[key].includes(element)) {
        killer = false;
      } else {
        killer = true;
      }
    });

    if (killer) {
      return key;
    }
  }
}

console.log(
  getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"]
  )
);

// ! Explanation: includes forEach for-in
