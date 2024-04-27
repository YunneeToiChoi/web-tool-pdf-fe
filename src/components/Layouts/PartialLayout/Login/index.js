import { useContext,useState } from 'react';
import { ContextParent } from '../Header';
import axios from 'axios';
function Login()
{
    let { open_login, setOpen_login, open_signup, setOpen_signup } =useContext(ContextParent);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/api-login', {
                email: email,
                password: password,
            })
              .then((response) => {
                console.log(response);
                alert('Succes');
                setAuthenticated(true);
              })
              .catch((err) => {
                alert('error');
                console.log(err);
              });
          
           
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred during login');
            }
        }
    };


    return (
        <div className={`${open_login ? 'block' : 'hidden'}`}>
            <form className="flex flex-col gap-3 w-full" onSubmit={handleLogin}>
                <h2 className="pl-3 font-display font-semibold text-2xl text-neutral-950">Login to your account</h2>
                <div className="isolate mt-6 -space-y-px rounded-2xl bg-white h-full">
                    <div className="group relative z-0 transition-all focus-within:z-10">
                        <input type="email" name="email" autoComplete="name" placeholder=" " value={email} onChange={(e) => setEmail(e.target.value)} className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl" />
                        <label htmlFor=":S1:" className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                            Email
                        </label>
                    </div>
                    <div className="group relative z-0 transition-all focus-within:z-10">
                        <input type="password" name="password" autoComplete="email" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl" />
                        <label htmlFor=":S2:" className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                            Password
                        </label>
                    </div>
                    <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                        <div className="flex">
                            <button className={`mx-auto transition hover:duration-300 ease-in-out delay-75 bg-black duration-300 text-white px-6 py-2 rounded-md hover:opacity-60 font-bold text-center`} type="submit">Login</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="relative flex justify-center">
                <p className="mt-2 text-sm text-gray-700">Don’t have an account? <button className="font-medium text-blue-600 hover:underline hover:cursor-pointer" onClick={() => { setOpen_login(!open_login); setOpen_signup(!open_signup) }}>Sign up</button> for a free trial.</p>
            </div>
        </div>
    );
}
export default Login;