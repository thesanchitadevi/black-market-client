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
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">There are four main types of state you need to properly manage in your React apps:
                            <br />

                           1. Local state <br />
                            2. Global state <br />
                            3. Server state <br />
                            4. URL state</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> How does prototypical inheritance work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.It is a method by which an object can inherit the properties and methods of another objec </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. <br />
                            The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            <strong>React : Facebook released React.js in March 2013 as a JavaScript library.</strong> <br />
                            <span>One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.

                                With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solutions for applications called React-Native.</span>
                            <br />
                            <strong>Angular : AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework.</strong> <br />
                            <span>Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.</span>
                            <br />
                            <strong>Vue : Vue.js is a JavaScript-based progressive framework for creating single-page applications.</strong> <br />
                            <span>Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications.</span> <br />
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;