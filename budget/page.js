"use client";
// export default function Budget() {
//   return (
//     <>

//       <div id="nav">
//           <a class="navA" href="intro.html">+ Home Page</a>
//           <a class="navA" href="fin.html">+ Fin Friend</a>
//           <a id="here" class="navA" href="index.html">+ My Info</a>
//       </div>

//       <div id="main">
//         <img id="icon" src="fin_friend/assets/icon.png" width="100" height="100">
//         <div id="part1">
//             <div id="pieChart"></div>

//         <div id="inputBox">
//           <label>Please enter your budget:</label>
//           <div id="inputInside">
//             <p>$</p><input type="number" name="budgetNum" placeholder="0.00" />
//           </div>
//             <button><b>Save Budget</b></button>
//         </div>

//         <div id="part2">
//           <div id="budgetTable">
//             <table id="table">
//               <caption>My Budget Plan</caption>
//               <tr>
//                 <th>Category</th>
//                 <th>Budget</th>
//                 <th>Amount Spent</th>
//                 <th>Remaining Balance</th>
//                 <th>Submit</th>
//               </tr>
//               <tr>
//                 <td><input id="c" type="text" name="category" placeholder="Category"></td>
//                 <td><input id="b" type="number" name="budget" placeholder="Budget"></td>
//                 <td><input id="a" type="number" name="spent" placeholder="Amount Spent"></td>
//                 <td><input id="r" type="number" name="balance" placeholder="Remaining Balance"></td>
//                 <td><img id="addButtonImage" src="buttonLogo.png"></td>
//               </tr>
//             </table>
//           </div>
//         </div>

//       </div>

//       <script>
//         let add = document.getElementById("addButtonImage");
//         let table = document.getElementById("table");
//         add.addEventListener("click", function() {
//           console.log("hi");
//           let category = document.getElementById("c").value;
//           let budget = document.getElementById("b").value;
//           let amount = document.getElementById("a").value;
//           let balance = document.getElementById("r").value;
//           let newtr = document.createElement("tr");
//           let td1 = document.createElement("td");
//           td1.textContent = category;
//           let td2 = document.createElement("td");
//           td2.textContent = budget;
//           let td3 = document.createElement("td");
//           td3.textContent = amount;
//           let td4 = document.createElement("td");
//           td4.textContent = balance;
//           newtr.appendChild(td1);
//           newtr.appendChild(td2);
//           newtr.appendChild(td3);
//           newtr.appendChild(td4);
//           table.appendChild(newtr);
//         });

//       </script>

//     </>
//   )
// }

// export default function Budget() {
//   return (
//     <>
//       <div id="nav">
//         <a className="navA" href="intro.html">+ Home Page</a>
//         <a className="navA" href="fin.html">+ Fin Friend</a>
//         <a id="here" className="navA" href="index.html">+ My Info</a>
//       </div>

//       <div id="main">
//         <img id="icon" src="fin_friend/assets/icon.png" width="100" height="100" alt="Icon" />
//         <div id="part1">
//           <div id="pieChart"></div>

//           <div id="inputBox">
//             <label>Please enter your budget:</label>
//             <div id="inputInside">
//               <p>$</p><input type="number" name="budgetNum" placeholder="0.00" />
//             </div>
//             <button><b>Save Budget</b></button>
//           </div>

//           <div id="part2">
//             <div id="budgetTable">
//               <table id="table">
//                 <caption>My Budget Plan</caption>
//                 <tr>
//                   <th>Category</th>
//                   <th>Budget</th>
//                   <th>Amount Spent</th>
//                   <th>Remaining Balance</th>
//                   <th>Submit</th>
//                 </tr>
//                 <tr>
//                   <td><input id="c" type="text" name="category" placeholder="Category" /></td>
//                   <td><input id="b" type="number" name="budget" placeholder="Budget" /></td>
//                   <td><input id="a" type="number" name="spent" placeholder="Amount Spent" /></td>
//                   <td><input id="r" type="number" name="balance" placeholder="Remaining Balance" /></td>
//                   <td><img id="addButtonImage" src="buttonLogo.png" alt="Add Button" /></td>
//                 </tr>
//               </table>
//             </div>
//           </div>
//         </div>

//         <script>
//           let add = document.getElementById("addButtonImage");
//           let table = document.getElementById("table");
//           add.addEventListener("click", function() {
//             console.log("hi");
//             let category = document.getElementById("c").value;
//             let budget = document.getElementById("b").value;
//             let amount = document.getElementById("a").value;
//             let balance = document.getElementById("r").value;
//             let newtr = document.createElement("tr");
//             let td1 = document.createElement("td");
//             td1.textContent = category;
//             let td2 = document.createElement("td");
//             td2.textContent = budget;
//             let td3 = document.createElement("td");
//             td3.textContent = amount;
//             let td4 = document.createElement("td");
//             td4.textContent = balance;
//             newtr.appendChild(td1);
//             newtr.appendChild(td2);
//             newtr.appendChild(td3);
//             newtr.appendChild(td4);
//             table.appendChild(newtr);
//           });
//         </script>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";

export default function Budget() {
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [budgetItems, setBudgetItems] = useState([]);

  const handleAddButtonClick = () => {
    console.log("hi");
    // Validate input before adding to the table
    if (category && budget && amount && balance) {
      setBudgetItems((prevItems) => [
        ...prevItems,
        { category, budget, amount, balance },
      ]);
      // Clear input fields after adding to the table
      setCategory("");
      setBudget("");
      setAmount("");
      setBalance("");
    }
  };

  return (
    <>
      <div id="nav">
        <a className="navA" href="intro.html">
          + Home Page
        </a>
        <a className="navA" href="fin.html">
          + Fin Friend
        </a>
        <a id="here" className="navA" href="index.html">
          + My Info
        </a>
      </div>

      <div id="main">
        <img
          id="icon"
          src="fin_friend/assets/icon.png"
          width="100"
          height="100"
          alt="Icon"
        />
        <div id="part1">
          <div id="pieChart"></div>

          <div id="inputBox">
            <label>Please enter your budget:</label>
            <div id="inputInside">
              <p>$</p>
              <input
                type="number"
                name="budgetNum"
                placeholder="0.00"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
            <button onClick={handleAddButtonClick}>
              <b>Save Budget</b>
            </button>
          </div>

          <div id="part2">
            <div id="budgetTable">
              <table id="table">
                <caption>My Budget Plan</caption>
                <tr>
                  <th>Category</th>
                  <th>Budget</th>
                  <th>Amount Spent</th>
                  <th>Remaining Balance</th>
                  <th>Submit</th>
                </tr>
                {budgetItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.category}</td>
                    <td>{item.budget}</td>
                    <td>{item.amount}</td>
                    <td>{item.balance}</td>
                    {/* You may want to add a delete button here */}
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
