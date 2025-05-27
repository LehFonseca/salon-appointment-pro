
import AuthForm from "@/components/auth/AuthForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center py-12 px-4 bg-glam-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-glam-800/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-glam-700">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                GlamPro
              </h1>
            </Link>
            <p className="text-white mt-2 text-lg">Entre em sua conta</p>
            <p className="text-gray-400 text-sm mt-1">
              Conecte-se com os melhores salões de beleza
            </p>
          </div>
          <AuthForm type="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
