export function Footer() {
    return (
            <footer className="bg-gray-50 text-slate-700">
                <div className="max-w-7xl mx-auto px-6 py-14">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                        <div>
                            <h2 className="text-3xl lg:text-3xl font-extrabold leading-tight">Join our newsletter to keep up to date with us!</h2>
                        </div>

                        <div aria-hidden />

                        <div className="flex justify-end">
                            <form className="flex items-center gap-4 w-full max-w-[560px]">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <div className="flex items-center bg-white border border-slate-200 rounded-full px-5 py-3 shadow-sm w-full">
                                    <svg className="w-5 h-5 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-4 4m4-4l-4-4"></path></svg>
                                    <input id="email" type="email" placeholder="Enter your email" className="w-full placeholder-slate-400 outline-none bg-transparent text-sm" />
                                </div>

                                <button type="submit" className="rounded-full bg-[#42B042] hover:bg-[#47D05A] text-white px-5 py-3 font-medium whitespace-nowrap transition-all duration-300">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200" />

                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-4">
                    <div className="flex items-start gap-6">
                        <div className="flex flex-col gap-1 mt-1">
                            <img src='/luntimeter.svg' draggable='false' className="w-20 h-20 -mt-3"/>
                        </div>
                        <div>
                            <h3 className="text-2xl font-extrabold">Luntimeter</h3>
                            <p className="text-slate-500 mt-1 max-w-[340px]">Where construction meets accountability. (temporary tagline)</p>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2" aria-hidden />

                    <div className="md:col-span-6">
                        <div className="flex flex-col sm:flex-row sm:justify-end sm:gap-10 gap-6">
                            <div className="max-w-[240px] pl-2">
                                <h4 className="text-sm font-bold text-slate-700 mb-4 uppercase">Platform</h4>
                                <ul className="space-y-3 text-slate-600">
                                    <li><a className="hover:underline whitespace-nowrap" href="#">Plans & Pricing</a></li>
                                    <li><a className="hover:underline whitespace-nowrap" href="#">Personal AI Manager</a></li>
                                    <li><a className="hover:underline whitespace-nowrap" href="#">AI Business Writer</a></li>
                                </ul>
                            </div>

                            <div className="max-w-[200px]">
                                <h4 className="text-sm font-bold text-slate-700 mb-4 uppercase">Company</h4>
                                <ul className="space-y-3 text-slate-600">
                                    <li><a className="hover:underline" href="#">Blog</a></li>
                                    <li><a className="hover:underline" href="#">Careers</a></li>
                                    <li><a className="hover:underline" href="#">News</a></li>
                                </ul>
                            </div>

                            <div className="max-w-[220px]">
                                <h4 className="text-sm font-bold text-slate-700 mb-4 uppercase ">Resources</h4>
                                <ul className="space-y-3 text-slate-600">
                                    <li><a className="hover:underline" href="#">Documentation</a></li>
                                    <li><a className="hover:underline" href="#">Papers</a></li>
                                    <li><a className="hover:underline" href="#">Press Conferences</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200">
                    <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-slate-600">
                        <div className="text-xs">© 2025 Luntimeter Inc.</div>
                        <div className="flex items-center gap-8">
                            <a href="#" className="hover:underline">Terms of Service</a>
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }