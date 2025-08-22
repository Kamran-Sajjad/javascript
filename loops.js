{
  console.log("-------print Table -------");

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("arr", arr);
  const t = 7;
  for (let i = 0; i <= arr.length; i++) {
    console.log(t, " x ", i, " = ", t * i);
  }
}

{
  console.log("-------factorial calculation -------");

  let n = 5;
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
    console.log(i);
  }
  console.log(fac);
}

{
  console.log("-------ATM Menu -------");
  const readline = require("readline");

  const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let balance = 1000;

  const checkMenu = () => {
    r.question("Press q to quit or c for continue ", (choice) => {
      if (choice == "q") {
        console.log("Exiting... Thank you!");
        r.close();
      } else if (choice == "c") {
        atmMenu();
      } else {
        console.log("Invalid choice. Please try again.");
        checkMenu();
      }
    });
  };

  const atmMenu = () => {
    console.log("\n------ ATM Menu ------");
    console.log("1. Check Balance");
    console.log("2. Deposit Money");
    console.log("3. Withdraw Money");
    console.log("4. Exit");

    r.question("Enter your choice: ", (choice) => {
      let c = parseInt(choice, 10);
      if (c == 1) {
        console.log(`Your balance is: $${balance}`);
        checkMenu();
      } else if (c == 2) {
        r.question("Enter amount to deposit: ", (amount) => {
          balance += parseFloat(amount);
          console.log(`Deposit successful! New balance is: $${balance}`);
          checkMenu();
        });
      } else if (c == 3) {
        r.question("Enter amount to withdraw: ", (amount) => {
          amount = parseFloat(amount);
          if (amount > balance) {
            console.log("Insufficient funds!");
          } else {
            balance -= amount;
            console.log(`Withdrawal successful! New balance is: $${balance}`);
          }
          checkMenu();
        });
      } else if (c == 4) {
        console.log("Exiting... Thank you!");
        r.close();
      } else {
        console.log("Invalid choice. Please try again.");
        atmMenu();
      }
    });
  };

  atmMenu();
}
