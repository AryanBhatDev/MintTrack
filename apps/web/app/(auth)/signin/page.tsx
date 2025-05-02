'use client';

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign in to continue
        </p>

        <div className="space-y-4">
          <button
            onClick={() => signIn("github",{ callbackUrl: "/dashboard" })}
            className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-900 transition-all text-sm font-semibold tracking-wide"
          >
            Continue with GitHub
          </button>

          <button
            onClick={() => signIn("google",{ callbackUrl: "/dashboard" })}
            className="w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition-all text-sm font-semibold tracking-wide"
          >
            Continue with Google
          </button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          By signing in, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
