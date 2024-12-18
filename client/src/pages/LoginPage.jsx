import LoginForm from "../components/LoginForm";
import "../styles/LoginPage.css"

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Log in to your account to continue</p>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
