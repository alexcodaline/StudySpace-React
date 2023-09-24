import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useForm } from "react-hook-form";
// //Hook Form
function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onTouched" });

  const submit = (value) => {
    console.log(value);
    reset();
  };

  const isNumeric = (value) => {
    return /^[A-Za-z]+$/.test(value);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(submit)}>
        <label>Name</label>
        <input
          {...register("name", {
            required: "Required",
            minLength: {
              value: 1,
              message: "Minimum 1 characters",
            },
            validate: (value) =>
              isNumeric(value) || "Name should not contain numbers",
          })}
          className={errors.name ? "invalid" : ""}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <label>Login</label>
        <input
          {...register("login", {
            required: "Login is required",
            minLength: {
              value: 5,
              message: "Minimum 5 characters are required",
            },
          })}
          className={errors.login ? "invalid" : ""}
        />
        {errors.login && <p>{errors.login.message}</p>}
        <label>Age</label>
        <input
          {...register("age", {
            required: "Age is required",
            min: {
              value: 18,
              message: "Age must be at least 18 years old",
            },
          })}
          className={errors.age ? "invalid" : ""}
        />
        {errors.age && <p>{errors.age.message}</p>}
        <label>Email</label>
        <input
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
          className={errors.email ? "invalid" : ""}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
export default App;

// //Formik
// function App() {
//   const validName = (value) => {
//     if (!value) {
//       return "Required";
//     } else if (value.match(/[0-9]/)){
//       return "Invalid login"
//     }
//   };
//   const validEmail = (value) => {
//     if (!value) {
//       return "Required";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//       return "Invalid email address";
//     }
//   };

//   const validLogin = (value) => {
//     if (!value) {
//       return "Required";
//     } else if (value.length < 5) {
//       return "Invalid login";
//     }
//   };

//   const validAge = (value) => {
//     if (!value) {
//       return "Required";
//     } else if (isNaN(value)) {
//       return "Age must be a number";
//     } else if (parseInt(value) < 18) {
//       return "Invalid age";
//     }
//   };

//   return (
//     <div className="wrapper">
//       <Formik
//         initialValues={{
//           name: "",
//           login: "",
//           age: "",
//           email: "",
//         }}
//         onSubmit={(value) => console.log(value)}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <label>Name</label>
//             <Field
//               name="name"
//               validate={validName}
//               className={errors.name && touched.name ? "invalid" : ""}
//             />
//             {errors.name && touched.name && <p>{errors.name}</p>}
//             <label>Login</label>
//             <Field
//               name="login"
//               validate={validLogin}
//               className={errors.login && touched.login ? "invalid" : ""}
//             />
//             {errors.login && touched.login && <p>{errors.login}</p>}
//             <label>Age</label>
//             <Field
//               name="age"
//               validate={validAge}
//               className={errors.age && touched.age ? "invalid" : ""}
//             />
//             {errors.age && touched.age && <p>{errors.age}</p>}
//             <label>Email</label>
//             <Field
//               name="email"
//               validate={validEmail}
//               className={errors.email && touched.email ? "invalid" : ""}
//             />
//             {errors.email && touched.email && <p>{errors.email}</p>}
//             <button type="submit">Sing in</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }
// export default App;

{
  /* 
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [login, setLogin] = useState("");

  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [isLoginValid, setIsLoginValid] = useState(false);

  const [wasNameTouched, setWasNameTouched] = useState(false);
  const [wasEmailTouched, setWasEmailTouched] = useState(false);
  const [wasAgeTouched, setWasAgeTouched] = useState(false);
  const [wasLoginTouched, setWasLoginTouched] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setWasNameTouched(true);
    setWasEmailTouched(true);
    setWasAgeTouched(true);
    setWasLoginTouched(true);
    setIsNameValid(true);
    setIsEmailValid(true);
    setIsLoginValid(true);
    setIsAgeValid(true);
    console.log({ name, login, age, email });
  };

  const nameChange = (e) => {
    setName(e.target.value);
    setWasNameTouched(true);
    if (e.target.value) {
      e.target.value.match(/[0-9]/ && e.target.value === "")
        ? setIsNameValid(false)
        : setIsNameValid(true);
    }
  };

  const loginChange = (e) => {
    setWasLoginTouched(true);
    setLogin(e.target.value);
    if (e.target.value.length < 5) {
      setIsLoginValid(false);
      return;
    }
    setIsLoginValid(true);
  };
  const ageChange = (e) => {
    setWasAgeTouched(true);
    setAge(e.target.value);
    if (e.target.value) {
      e.target.value < 18 ? setIsAgeValid(false) : setIsAgeValid(true);
      return;
    }
    setIsAgeValid(true);
  };
  const emailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setWasEmailTouched(true);
    const isValidEmail =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value);
    setIsEmailValid(isValidEmail);
  };

  return (
    <div className="wrapper">
      <form onSubmit={submit}>
        <label>Name</label>
        <input
          onChange={nameChange}
          className={
            !isNameValid && wasNameTouched
              ? "invalid"
              : isNameValid
              ? "valid"
              : ""
          }
        />
        {!isNameValid && wasNameTouched && <p>Enter correct name</p>}

        <label>Login</label>
        <input
          onChange={loginChange}
          className={
            !isLoginValid && wasLoginTouched
              ? "invalid"
              : isLoginValid
              ? "valid"
              : ""
          }
        />
        {!isLoginValid && wasLoginTouched && <p>Enter correct login</p>}
        <label>Age</label>
        <input
          onChange={ageChange}
          className={
            !isAgeValid && wasAgeTouched ? "invalid" : isAgeValid ? "valid" : ""
          }
        />
        {!isAgeValid && wasAgeTouched && <p>Enter correct age</p>}
        <label>Email</label>
        <input
          onChange={emailChange}
          className={
            !isEmailValid && wasEmailTouched
              ? "invalid"
              : isEmailValid
              ? "valid"
              : ""
          }
        />
        {!isEmailValid && wasEmailTouched && <p>Enter correct email</p>}
        <button
          className={`button ${
            isNameValid && isEmailValid && isAgeValid && isLoginValid
              ? "valid"
              : ""
          }`}
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
export default App;

// focus
const ageLostFocus = () => {
  setWasAgeTouched(true);
  if (age < 18) {
    setIsAgeValid(false);
    return;
  }
  setIsAgeValid(true);
};

const loginLostFocus = () => {
  setWasLoginTouched(true);
  if (login.length < 5) {
    setIsLoginValid(false);
    return;
  }
  setIsLoginValid(true);
};

const nameLostFocus = () => {
  setWasNameTouched(true);
  if (name.match(/[0-9]/)) {
    setIsNameValid(false);
    return;
  }
  setIsNameValid(true);
};

const emailLostFocus = () => {
  setWasEmailTouched(true);
  if (!isValidEmail) {
    setIsEmailValid(false);
    return;
  }
  setIsEmailValid(true);
}; */
}
