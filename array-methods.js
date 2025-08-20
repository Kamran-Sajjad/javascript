{
  console.log("------------ for each -------------");
  console.log(
    "------------ Example 1 using Arrow functions, sort this array -------------"
  );
  let fruits = ["Apple", "Cherry", "Orange", "Banana", "Mango"];
  console.log(fruits);
  fruits.sort();
  console.log("Sorted array using forEach");
  fruits.forEach((value) => {
    console.log(value);
  });

  console.log(
    "------------ Example 2: using simple functions, Square of each number -------------"
  );
  let numbers = [1, 2, 3, 4];
  numbers.forEach(square);

  function square(value) {
    console.log(value * value);
  }
}

{
  console.log("------------ map -------------");
  console.log("------------ Example 1: Make UpperCase letters  -------------");
  let arr = ["a", "b", "c"];
  console.log("Orignal Array is: ");
  console.log(arr);
  let upperCase = arr.map((value) => {
    return value.toUpperCase();
  });
  console.log("UpperCase Array is: ");
  console.log(upperCase);

  console.log("------------ Example 2: Add 100 to each number -------------");
  let add100 = [1, 2, 3, 4];
  console.log("Orignal Array is: ");
  console.log(add100);
  let finalAdd = add100.map((value) => {
    return value + 100;
  });
  console.log("Modified Array is: ");
  console.log(finalAdd);
}

{
  console.log("------------ Filter -------------");
  console.log("------------ Example 1: number greater than 50  -------------");
  let arr_numGreater50 = [30, 55, 75, 42];
  console.log("orignal array is: ");
  console.log(arr_numGreater50);
  let filteredArr = arr_numGreater50.filter((value) => value > 50);
  console.log("Filtered array is: ");
  console.log(filteredArr);

  console.log(
    "------------ Example 2: words longer than 3 letters -------------"
  );
  let animals = ["cat", "dog", "elephant"];
  console.log("orignal array is: ");
  console.log(animals);
  let animalArr = animals.filter((value) => {
    return value.length > 3;
  });
  console.log("Modified array is: ");
  console.log(animalArr);
}

{
  console.log("------------ Reduce() -------------");
  console.log("------------ Example 1: Add all numbers -------------");
  let arr = [2, 4, 6, 8];
  console.log("Orignal Array is: ");
  console.log(arr);
  let sum = arr.reduce((total, value) => {
    return total + value;
  }, 0);
  console.log("Sum of array is: ",  sum);
  console.log(sum);

  console.log("------------ Example 2: Join letters -------------");
  let letters = ["K", "S"];
  console.log("Orignal Array is: ");
  console.log(letters);
  let join = letters.reduce((total, value) => {
    return total + value;
  });
  console.log("Sum of array is: ",  join);

}

{
  console.log("------------ find() -------------");
  console.log("------------ Example 1: Divisible by 3 -------------");
  let arr = [4, 7, 9, 11, 15];
  console.log("Orignal Array is: ");
  console.log(arr);
  let divisible = arr.find((value) => {
    return value % 3 == 0;
  });
  console.log("Number divisible by 3 is: ",  divisible);

  console.log("------------ Example 2: First letter is A -------------");
  let letters = ["Kamran", "Ali", "zaman"];
  console.log("Orignal Array is: ");
  console.log(letters);
  let first = letters.find((value) => {
    return value[0] == "A" || value[0] == "a";
  });
  console.log("Name Starting with A/a is: ",  first);
}

{
  console.log("------------ findIndex() -------------");
  console.log(
    "------------ Example 1: Position of first No >100 -------------"
  );
  let arr = [90, 101, 105];
  console.log("Orignal Array is: ");
  console.log(arr);
  let num = arr.findIndex((value) => {
    return value > 100;
  });
  console.log("Number greater than 100 is at index: ",  num);

  console.log("------------ Example 2: Find the position of cat -------------");
  let animal = ["dog", "elephant", "cat", "mouse"];
  console.log("Orignal Array is: ");
  console.log(animal);
  let position = animal.findIndex((value) => {
    return value == "cat";
  });
  console.log(
    "Cat is at index: ", position, ", and at ",  (position + 1), " Position."
  );
}

{
  console.log("------------ some() -------------");
  console.log(
    "------------ Example 1: Check if array has score < 40 -------------"
  );
  let arr = [50, 90, 35, 65];
  console.log("Orignal Array is: ");
  console.log(arr);
  let score = arr.some((value) => {
    return value < 40;
  });
  console.log("Is there any score than 40: ",  score);

  console.log(
    "------------ Example 2: Check any word contains letter x -------------"
  );
  let animal = ["dog", "elephant", "text", "mouse"];
  console.log("Orignal Array is: ");
  console.log(animal);
  let letter = animal.some((value) => {
    return value.includes("x");
  });
  console.log("is any word contains letter 'x': "+letter);
}

{
  console.log("------------ every() -------------");
  console.log(
    "------------ Example 1: Check all numbers are even -------------"
  );
  let arr = [2, 4, 6, 14];
  console.log("Orignal Array is: ");
  console.log(arr);
  let isEven = arr.every((value) => {
    return value % 2 == 0;
  });
  console.log("All numbers are even in this array: ",  isEven);

  console.log(
    "------------ Example 2: Check all names have exactly 4 letters -------------"
  );
  let animal = ["dog", "text", "mice"];
  console.log("Orignal Array is: ");
  console.log(animal);
  let letter = animal.every((value) => {
    return value.length==4;
  });
  console.log("All Names have 4 letters in this array: ",  letter);
}

{
  console.log("------------ concat() -------------");
  console.log("------------ Example 1: Combine 2 arrays -------------");
  let arr1 = [1, 2, 3, 4];
  let arr2 = [5, 6, 7, 8];
  console.log("Array1 is: ",  arr1);
  console.log("Array2 is: ",  arr2);
  let arr = arr1.concat(arr2);
  console.log("Concatinated Array is: ",  arr);
}

{
  console.log("------------ slice() -------------");
  console.log("------------ Example 1: take items from position 1 to 3 -------------");
  let arr1 = [10, 20, 30, 40,50];
  console.log("Orignal Array is: ",  arr1);
  let arr = arr1.slice(1,3);
  console.log("Sliced Array is: ",  arr);
}

{
  console.log("------------ splice() -------------");
  console.log(
    "------------ Example 1: Remove 2 items from position 1 -------------"
  );
  let arr1 = [10, 20, 30, 40, 50];
  console.log("Orignal Array is: ",  arr1);
  let arr = arr1.splice(1, 2);
  console.log("Removed values are: ",  arr);
  console.log("Spliced Array is: ",  arr1);
}

{
  console.log("------------ fill() -------------");
  console.log("------------ Example 1: Fill array with the 'x' -------------");
  let arr = [1, 2, 3, 4, 5];
  console.log("Orignal array is:", arr);
  arr.fill("x");
  console.log("Array filled with 'x':", arr);
}

{
  console.log("------------ flat() -------------");
  console.log(
    "---------- Example 1: Remove 1 level of brackets -----------"
  );
  const arr = [1, [2, [3]]];
  const flattenedArray = arr.flat();
  console.log("Original array:", arr);
  console.log("Flattened one level:", flattenedArray);
}

{
  console.log("------------ flatMap() -------------");
  console.log("---------- Example 1: flatMap() -----------");
  const arr = [1, 2, 3];
  const result = arr.flatMap((num) => [num, num * 2]);

  console.log("Original array:", arr);
  console.log("After flatMap:", result);
}
