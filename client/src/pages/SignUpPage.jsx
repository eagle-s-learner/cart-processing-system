import { useState } from "react";

export default function SignupPage({ setShowSignup }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignUp(ev){
        ev.preventDefault()
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Sign Up</h3>
                <p className="text-gray-600 mt-2">Create Your Account</p>
                <label>Name</label>
                <input
                    className="py-2 px-3 block border-2 w-full mb-2"
                    type="name"
                    onChange={(ev) => setName(ev.target.value)}
                    value={name}
                    required
                    placeholder="Enter your password here"
                />
                <label>Email</label>
                <input
                    className="py-2 px-3 block border-2 w-full mb-2"
                    type="eamil"
                    onChange={(ev) => setEmail(ev.target.value)}
                    value={email}
                    required
                    placeholder="Enter your email here"
                />
                <label>Password</label>
                <input
                    className="py-2 px-3 block border-2 w-full mb-2"
                    type="password"
                    onChange={(ev) => setPassword(ev.target.value)}
                    value={password}
                    required
                    placeholder="Enter your password here"
                />
                <button
                    onClick={handleSignUp}
                    className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                >
                    SignUp
                </button>
                <button
                    onClick={() => setShowSignup(false)}
                    className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
