
import AuthForm from "@/components/auth/AuthForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen py-12 px-4 flex items-center justify-center bg-glam-900">
      <div className="w-full max-w-md bg-glam-800 p-8 rounded-xl border border-glam-700 gold-glow">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold gradient-heading">GlamPro</h1>
          </Link>
          <p className="text-gray-300 mt-2">Criar uma nova conta</p>
        </div>
        <AuthForm type="register" />
      </div>
    </div>
  );
};

export default Register;
