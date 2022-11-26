import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-15">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs border border-red-800 font-semibold tracking-wider uppercase bg-teal-accent-400 text-red-900 rounded-full">Brand new</p>
                        </div>
                        <h2 className="font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                            Your favorite{' '}
                            <br className="hidden md:block" />
                             collections are{' '}
                            <span className="inline-block text-deep-purple-accent-400">here</span>
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg ">We are reseller online based market. Any branded smartphone collections are over here.</p>
                    </div>
                    <div>
                        <Link to='/categories' className="border border-gray-800 rounded-full px-5 py-1.5 font-md hover:text-white hover:bg-gray-800">Visit the shop</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    <div className="w-2/5">
                        <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
                    </div>
                    <div className="w-5/12 -ml-16 lg:-ml-32">
                        <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};