import { useContext,useState } from 'react';
import { ContextParent } from '../Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function SignUp()
{
    let { open_login, setOpen_login, open_signup, setOpen_signup } =useContext(ContextParent);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null); // State to store error
    const [passwordError, setPasswordError] = useState(null); // State to store error
    function handleRegister(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/post-crud', {
      email: email,
      password: password,
    })
    .then(() => {
      alert('Register Success')
      window.location.reload()
      // to do something with flow layout 
    })
    .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
         const  error = err.response.data.message;
         let emailError = null;
         let passwordError = null;
          if (error.includes('Email is required.')) {
            const errorEmpty = 'Email and password are required.';
            setEmailError(errorEmpty);
            setPasswordError(errorEmpty);
          } else if (error.includes('Email already exists in the database.')) {
            emailError = 'Email already exists in the database.';
            setEmailError(emailError);
          } else if (error.includes('Invalid email format.')) {
            emailError = 'Invalid email format.';
            setEmailError(emailError);
          } else if (error.startsWith('Password must')) {
            passwordError = error;
            setPasswordError(passwordError);
        }
        } else {
          setPasswordError('An error occurred during sign up.');
          setEmailError('An error occurred during sign up.'); // Fallback error message
        }
    });
  }

    return(
        <div className={`${open_signup ? 'block':'hidden'}`}>
        <form className=" flex flex-col gap-3 w-full" onSubmit={handleRegister} method="POST" action="/post-crud">
            <h2 className=" pl-3 font-display font-semibold text-2xl text-neutral-950">Get started for free</h2>
            <div className="isolate mt-6 -space-y-px rounded-2xl bg-white h-full">
            <div className="group relative z-0 transition-all focus-within:z-10">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id=":S1:" autoComplete="email" placeholder=" " className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl" />
                <label htmlFor=":S1:" className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                Email
                </label>
                {emailError && <p className="text-red-500">{emailError}</p>} {/* Display error message */}
            </div>
            <div className="group relative z-0 transition-all focus-within:z-10">
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id=":S2:" autoComplete="password" placeholder=" " className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl" />
                <label htmlFor=":S2:" className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                Password
                </label>
                {passwordError && <p className="text-red-500">{passwordError}</p>} {/* Display error message */}
            </div>
            <div className="group relative z-0 transition-all focus-within:z-10">
                <input type="number" name="numberPhone" autoComplete="organization" placeholder=" " className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl" />
                <label htmlFor=":S3:" className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                NumberPhone
                </label>
            </div>
            <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                <div className="flex">
                <button className=" mx-auto transition hover:duration-300 ease-in-out delay-75 bg-black duration-300 text-white px-6 py-2 rounded-md hover:opacity-60 font-bold text-center " type="submit">Sign up</button>
                </div>
            </div>
            </div>  
        </form>
        <div className=" relative flex justify-center">
        <p className="mt-2 text-sm text-gray-700 ">Already registered? <button className="font-medium text-blue-600 hover:underline hover:cursor-pointer" onClick={()=>{setOpen_login(!open_login);setOpen_signup(!open_signup)}}> Login </button> to your account.</p>
        </div>
        </div>
    )
}
export default SignUp;