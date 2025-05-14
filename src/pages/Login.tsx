
import AuthForm from "@/components/auth/AuthForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold gradient-heading">BeautyCut</h1>
          </Link>
          <p className="text-gray-600 mt-2">Sign in to access your account</p>
        </div>
        <AuthForm type="login" />
      </div>
    </div>
  );
};

export default Login;
