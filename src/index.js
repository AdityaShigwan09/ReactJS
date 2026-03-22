import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// import { createContext, useState } from 'react';
// import { createRoot } from 'react-dom/client';

// const UserContext =createContext();

// function Component1() {
//   const [user, setUser] = useState("Aditya");

//   return (
//     <>
//     <UserContext.Provider value={user}>
      
//       <h1>{`Hello ${user}`}</h1>
//       <Component2 user={user} />

//       </UserContext.Provider>
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3() {
// const user=onContext(UserContext);

//   return (
//     <>
//       <h1>Component 3</h1>
//       <h2>{`Hello ${user} again`}</h2>
//     </>
//   );
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<Component1 />);

