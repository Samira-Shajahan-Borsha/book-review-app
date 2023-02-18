import React from 'react';

const Blogs = () => {
    return (
        <div className='text-gray-900 bg-zinc-100'>
            <h1 className='text-center py-10 text-4xl font-medium text-gray-800'>Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 px-8 pb-52 gap-y-6'>
                <div className='md:px-12'>
                    <h1 className='text-xl pb-7'>What is Context API? </h1>
                    <p className='text-justify'>Context provides a way to share values between components without having to pass a prop explicitly through every level of the tree. To avoid prop drilling, we can use the Context API. Firstly, we need to declare a context. Secondly, to set the Context API, we have to use a "Context Provider," which wraps the component. It can be declared in app.js or index.js so that it can be accessible from anywhere in the app. Or, it can be declared in a specific component so that it can be accessible in that component and its child component. Thirdly, we can assign a value using the "value" prop. To read the value within any child component, a useContext hook will be used. Even so, we can set multiple Context API in a component by nesting. </p>
                </div>
                <div className='md:px-12'>
                    <h1 className='text-xl pb-7'>What is Semantic Tag?</h1>
                    <p className='text-justify'>Semantic tags define the meaning of the text they contain.Semantic HTML tags include things like header, article, and footer. They explicitly state the function of the content they contain. The various sections of a webpage are simpler to identify for sighted viewers. Headers, footers, and main content are all readily visible.
                    SEO (search engine optimization) needs semantic HTML tags because they show what the content of the tags is for.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;