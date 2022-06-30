import { connect } from "react-redux";
import { useState } from "react";
import styles from "../../../styles/Home.module.css"
import { signIn } from "../../../actions/auth-modal-actions";

const Auth = ({
  signIn,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log("user")
  }

  return (
    <div className={styles.authContainer}>
      <h3>
        Welcome ! 
      </h3>
      <form className={styles.authForm} onSubmit={handleSubmit()}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input className={styles.authSubmit} type="submit" value="Sign In" />
      </form>
    </div>
  );
}

export default connect(null, { signIn })(Auth);
