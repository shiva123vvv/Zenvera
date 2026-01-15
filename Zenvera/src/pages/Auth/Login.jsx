import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

const Login = () => {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-hero-gradient animate-fade-in">
            <div className="max-w-md w-full mx-4">
                <div className="bg-white rounded-3xl p-8 shadow-glass border border-white/60">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-zen-navy mb-2">Welcome Back</h1>
                        <p className="text-zen-gray">Sign in to access your dashboard</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-zen-navy mb-2">Email Address</label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-zen-primary/50 focus:border-zen-primary outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-medium text-zen-navy">Password</label>
                                <Link to="#" className="text-sm text-zen-primary hover:text-zen-secondary font-medium">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-zen-primary/50 focus:border-zen-primary outline-none transition-all"
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-primary w-full flex items-center justify-center">
                            Sign In <FiArrowRight className="ml-2" />
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-zen-gray">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-zen-primary font-bold hover:underline">
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
