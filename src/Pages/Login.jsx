import React from "react";
import "./stlylePage/Login.css";

const Login = () => {
  return (
    <>
      <main className="main main--login">
        <section className="login">
          <div className="container container--login">
            <div className="login__body">
              <form className="login__form">
                <p className="login__mistake"></p>
                <div className="login__username-wrapper">
                  <input
                    className="login__username"
                    type="text"
                    name="user_name"
                    placeholder="Username"
                    required
                    autocomplete="off"
                  />
                </div>
                <div>
                  <input
                    className="login__password"
                    type="password"
                    name="user_password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button className="login__btn" type="submit">
                  login
                </button>
                <p className="login__forgot">Forgot password?</p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
    // <main classNameName="main">
    //   <section className="login">
    //     <div className="container">
    //       <form className="form">
    //         <div>
    //           <input
    //             className="login__name"
    //             type="text"
    //             placeholder="login..."
    //           />
    //         </div>
    //         <div>
    //           <input
    //             className="password__name"
    //             type="password"
    //             placeholder="password"
    //           />
    //         </div>
    //         <button className="login__btn" type="submit">
    //           Submit
    //         </button>
    //       </form>
    //     </div>
    //   </section>
    // </main>
  );
};

export default Login;
