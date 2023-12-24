function Form() {
    return (
        <div className="flex flex-col justify-center p-6 pb-15">
            <div className="mx-auto max-w-md">
                <svg className="h-12 mx-auto text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
            </div>
            <div className="bg-white/80 backdrop-blur-xl mt-10 p-10 mx-auto rounded-xl shadow-xl">
                <form className="space-y-6" action="/" autoComplete="off">
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                        <div className="relative rounded-md shadow-sm mt-1">
                            <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <input className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500 text-sm pl-10" placeholder="Gadji" type="text" id="name" name="name" required />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <div className="relative rounded-md shadow-sm mt-1">
                            <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <input className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500 text-sm pl-10" placeholder="Gadji124@gmail.com" type="email" id="email" name="email" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        <div className="relative rounded-md shadow-sm mt-1">
                            <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </div>
                            <input className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500 text-sm pl-10" placeholder="Minimum 8 characters" type="password" id="password" name="password" minLength="8" required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">Confirm Password</label>
                        <div className="relative rounded-md shadow-sm mt-1">
                            <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </div>
                            <input className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500 text-sm pl-10" placeholder="Minimum 8 characters" type="password" id="password_confirmation" name="password_confirmation" minLength="8" required />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;