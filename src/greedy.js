// you are the banker in Monopoly with your family who has lost many of the game pieces.
// you only have bills in these denominations
//$5, $10, adn $25

// you need to pay out your family in the least number of bills possible so you
// wont run out before the game is over. write a function that calculates
// the least number of bills required for any given dollar amount
// that is divisible by 5

const makeChange = (coins, amount) => {
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

export { makeChange };
