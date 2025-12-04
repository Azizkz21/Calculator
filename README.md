Calculator with React & TypeScript — Project Description
📌 Project Overview

This is a simple yet fully functional calculator built with React, TypeScript, and the useReducer hook.
The goal of the project was to practice state management using reducer logic, handle various calculator operations, and properly work with numeric input in string format.

The calculator supports:

Adding digits

Decimal numbers

Arithmetic operations (+, -, *, /)

Chained calculations

C (clear all values)

Increment & decrement buttons (+1, -1)

Error-free input handling (no double dots, empty states, etc.)

🧠 Key Concepts & Features
✔️ useReducer for Complex State

The calculator uses a reducer to manage multiple fields in state:

current — the currently typed number

previous — the number stored before the operation

operation — the selected operator

This approach helps structure logic more cleanly compared to multiple useState hooks.

✔️ String-based Input Logic

Because users type numbers digit-by-digit, all input is handled as strings, and converted to numbers only when evaluating.

✔️ Mathematical Evaluation

The reducer performs the necessary arithmetic operations and returns updated state depending on the action type.

✔️ Safe Decimal Input

The calculator prevents invalid input such as:

multiple dots (1.2.3)

starting with a dot (. → 0.)

✔️ Increment / Decrement Feature

Two additional buttons (+1 and -1) modify the current value directly using reducer actions.

🛠️ Technologies Used

React (functional components)

TypeScript

useReducer for state management

CSS Modules for styling

JavaScript event handling

🚀 What I Learned

How to build a complete feature using useReducer

How to structure complex state in TypeScript

How to parse and validate numeric input in string format

Handling calculator logic step-by-step

Creating clean, reusable action types