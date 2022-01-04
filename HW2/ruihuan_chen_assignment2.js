const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function doubleQuantityAndPrice(items) {
  const copy = JSON.parse(JSON.stringify(items));

  return copy.map((item) => {
    item.quantity *= 2;
    item.price *= 2;

    return item;
  });
}

function filterByQuantityAndPrice(items) {
  const copy = JSON.parse(JSON.stringify(items));

  return copy.filter((item) => {
    return item.quantity > 2 && item.price > 300;
  });
}

function calculateTotalValue(items) {
  return items.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
}

// console.log(itemsObject);
console.log(doubleQuantityAndPrice(itemsObject));
console.log(filterByQuantityAndPrice(itemsObject));
console.log(calculateTotalValue(itemsObject));
// console.log(itemsObject);

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

function removeNonAlphaAndExtraSpace(str) {
  const mod = "";

  return (
    mod +
    str
      .trim()
      .toLowerCase()
      .split("")
      .filter((char, i, chars) => {
        if (char === " ") {
          return i === chars.length - 1 || chars[i + 1] !== " ";
        } else return char !== char.toUpperCase();
      })
      .join("") +
    mod
  );
}

console.log(removeNonAlphaAndExtraSpace(string));
