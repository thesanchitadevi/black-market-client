import React from 'react';

const Blog = () => {
    return (
        <section className=" text-gray-900 my-10">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Answer of Some Questions You Need to Know</h2>
                <p className="mt-4 mb-8 text-gray-400">Given questions are very frequently asked. So, check out the answers.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the different ways to manage a state in a React application?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> How does prototypical inheritance work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;