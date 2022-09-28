// you are the banker in Monopoly with your family who has lost many of the game pieces.
// you only have bills in these denominations
//$5, $10, adn $25

// you need to pay out your family in the least number of bills possible so you
// wont run out before the game is over. write a function that calculates
// the least number of bills required for any given dollar amount
// that is divisible by 5

const makeChange_ = (coins, amount) => {
  const coinArray = [];
  coins.sort((a, b) => b - a);
  let coinTotal = 0;
  let i = 0;
  while (amount > 0) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      coinTotal++;
      coinArray.push(coins[i]);
    } else {
      i++;
    }
  }

  return { totalCoins: coinTotal, denominations: coinArray };
};

const cache = {};
const coins = [10, 6, 1];

const makeChange = (c) => {
  if (cache[c]) return cache[c];

  let minCoins = -1;

  coins.forEach((coin) => {
    if (c - coin > 0) {
      let currMinCoins = makeChange(c - coin);
      if (minCoins === -1 || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });

  cache[c] = minCoins + 1;
  return cache[c];
};

export { makeChange };
