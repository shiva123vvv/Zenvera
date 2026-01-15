import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

const Register = () => {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-hero-gradient animate-fade-in">
            <div className="max-w-md w-full mx-4">
                <div className="bg-white rounded-3xl p-8 shadow-glass border border-white/60">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-zen-navy mb-2">Create Account</h1>
                        <p className="text-zen-gray">Join Zenvera to start your journey</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-zen-navy mb-2">Full Name</label>
                            <div className="relative">
                                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-zen-primary/50 focus:border-zen-primary outline-none transition-all"
                                />
                            </div>
                        </div>

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
                            <label className="block text-sm font-medium text-zen-navy mb-2">Password</label>
                            <div className="relative">
                                <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="Create a password"
                                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-zen-primary/50 focus:border-zen-primary outline-none transition-all"
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-primary w-full flex items-center justify-center">
                            Create Account <FiArrowRight className="ml-2" />
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-zen-gray">
                        Already have an account?{' '}
                        <Link to="/login" className="text-zen-primary font-bold hover:underline">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
