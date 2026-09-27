# 📝 React Todo App

A simple and responsive Todo application built with **React.js** and **Bootstrap**.

This project was built from scratch to understand the fundamentals of React, including components, props, state management, event handling, array methods, `useEffect`, JSON serialization, and browser `localStorage`.

The application allows users to create and delete Todos while automatically saving them in the browser so that they remain available even after refreshing the page.

---

## 🚀 Features

- ➕ Add new Todos
- 📅 Assign a date to each Todo
- 🗑️ Delete Todos
- ✅ Input validation
- 💾 Persist Todos using `localStorage`
- 🔄 Todos survive page refreshes
- 🆔 Unique ID generated for every Todo
- 📱 Responsive Bootstrap layout
- 🎨 Bootstrap-based styling
- ⚛️ Component-based React architecture
- 📦 JSON serialization/deserialization

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Frontend UI and application logic |
| JavaScript | Application functionality |
| Bootstrap | Layout and styling |
| HTML/JSX | Structure |
| CSS | Styling through Bootstrap |
| JSON | Data serialization |
| localStorage | Persistent browser storage |
| Vite | React development environment |
| Git | Version control |

---

# 📂 Project Structure

```text
todo-app/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── TodoName.jsx
│   │   │
│   │   ├── TodoAdd/
│   │   │   ├── TodoAdd.jsx
│   │   │   ├── TodoInput.jsx
│   │   │   ├── DateInput.jsx
│   │   │   └── AddButton.jsx
│   │   │
│   │   ├── TodoList.jsx
│   │   └── DeleteButton.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md


🔄 Application Data Flow

                    ┌───────────────┐
                    │     App       │
                    └───────┬───────┘
                            │
              ┌─────────────┴─────────────┐
              │                           │
              ▼                           ▼
        TodoAdd                        TodoList
              │                           │
       ┌──────┼──────┐                    │
       │      │      │                    │
       ▼      ▼      ▼                    ▼
     Input   Date   Add                 Todos
                                          │
                                          ▼
                                    DeleteButton


ADD
 │
 ▼
handleAddTodo()
 │
 ▼
newTodo
 │
 ▼
setTodos()
 │
 ▼
todos changes
 │
 ▼
useEffect()
 │
 ▼
JSON.stringify()
 │
 ▼
localStorage


DELETE
 │
 ▼
handleDeleteTodo()
 │
 ▼
filter()
 │
 ▼
updatedTodos
 │
 ▼
setTodos()
 │
 ▼
useEffect()
 │
 ▼
localStorage updated


PAGE REFRESH
 │
 ▼
localStorage.getItem()
 │
 ▼
JSON.parse()
 │
 ▼
setTodos()
 │
 ▼
Todos restored

👨‍💻 Author

Raunak

Built with ❤️ while learning React.js.