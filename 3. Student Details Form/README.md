# 🎓 Student Details Form

A simple **Student Details Form** built with **React** and **Bootstrap**.

This project was created as a practical exercise to revise Bootstrap form components and utility classes while building a small React application.

---

## 🚀 Tech Stack

- React
- JavaScript
- Bootstrap
- Vite

---

## 📌 Features

- Student name input
- Email input
- Age input with a minimum value restriction
- Grade selection dropdown
- Gender selection using radio buttons
- Terms & conditions checkbox
- Form submission handling
- Automatic form reset after submission
- Responsive Bootstrap styling

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Move into the project folder
cd student-details-form

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## 🧩 Bootstrap Concepts Practiced

This project is part of a larger Bootstrap revision plan.

### Layout & Spacing

`container`, `mt-5`, `mb-3`, `mt-2`, `ms-2`

### Form Components

`form-label`, `form-control`, `form-select`, `form-check`, `form-check-input`, `form-check-label`

### Buttons

`btn`, `btn-primary`

---

## 📝 Form Structure

```text
Student Details Form
│
├── Full Name
├── Email Address
├── Age
├── Grade
├── Gender
│   ├── Male
│   ├── Female
│   └── Others
├── Terms & Conditions
└── Submit
```

---

## ⚙️ Form Reset Functionality

The form uses React's `onSubmit` event:

```jsx
<form
  onSubmit={(e) => {
    e.preventDefault()
    e.currentTarget.reset()
  }}
>
```

### How it works

- `e.preventDefault()` stops the browser's default form submission, so the page doesn't reload.
- `e.currentTarget.reset()` resets the form and returns all fields to their initial values.

### Flow

```text
Click Submit
     ↓
onSubmit event fires
     ↓
preventDefault() → page does not reload
     ↓
currentTarget.reset() → all fields cleared
```

---

## 🔢 Age Validation

The age field uses the browser's built-in number-input validation:

```jsx
<input type="number" min={0} />
```

This prevents values below `0` from being submitted.

---

## 🎨 Bootstrap Form Classes Reference

| Class | Purpose |
| --- | --- |
| `container` | Main responsive container for the form |
| `form-label` | Standard form labels |
| `form-control` | Text, email, and number inputs |
| `form-select` | Grade dropdown |
| `form-check` | Wrapper for radio buttons and checkboxes |
| `form-check-input` | The radio button or checkbox itself |
| `form-check-label` | Label for radio buttons and checkboxes |
| `btn btn-primary` | Bootstrap primary button |

---

## 📚 What I Learned

- Installing Bootstrap in a React project
- Importing Bootstrap CSS
- Using Bootstrap utility classes
- Building Bootstrap forms
- Connecting labels to inputs with `htmlFor` and `id`
- Grouping radio buttons using the `name` attribute
- Handling form submission in React
- Preventing default browser form submission
- Resetting an HTML form from a React event
- Using HTML input validation with `min`
- Understanding the differences between Bootstrap form classes

---

## 🗂️ Project Structure

```text
student-details-form/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔮 Possible Improvements

- Store form data in React state and display submitted students
- Add custom validation messages
- Add `required` validation for all fields
- Persist submissions using `localStorage` or a backend


## 👨‍💻 Author
Raunak