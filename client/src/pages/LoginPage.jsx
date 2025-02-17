import LoginForm from "../components/LoginForm";
import "../styles/LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Log in to your account to continue</p>

        {/* Demo Account Box */}
        <div className="demo-account-box">
          <h3>Demo Account</h3>
          <p><strong>Username:</strong> demoUser</p>
          <p><strong>Password:</strong> DemoPass123</p>
          <p className="server-delay-note">
            Note: This app runs on a free server. Please allow up to 55 seconds for the backend to wake up.
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
