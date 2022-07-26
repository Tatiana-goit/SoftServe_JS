const sum = 5 + 12; //?

const user = {
  name: 'Tatiana',
  adress: 'Lviv',
};

user;

const newUser = { ...user };

newUser === user; //?

function factorial(n) {
  let result = 1;
  while (n > 1) {
    result *= n; //?
    n -= 1; //?
  }
  return result; //?
}

factorial(5);//
