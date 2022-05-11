import React from 'react';
import "./Blogs.css";
const Blogs = () => {
    return (
        <div className='container mt-5'>
           <div className='question'>
           <h2>Q-1: Defference between Node.JS and Javascript.</h2>
                <div className='d-flex derection-column '>
                    <div>
                    <h4>
                        Node.JS:
                    </h4>
                    <ul>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>Nodejs does not have capability to add HTML tags.</li>
                        <li>Nodejs is used in server-side development.</li>
                    </ul>
                    </div>
                    <div>
                    <h4>
                        Javascript:
                    </h4>
                    <ul>
                        <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                        <li>It is basically used on the client-sidDifferences between sql and nosql databases.e.</li>
                        <li>Javascript is capable enough to add HTML and play with the DOM.</li>
                        <li>Javascript is used in frontend development.</li>
                    </ul>
                    </div>
            </div>
           </div>

           <div className='question'>
           <h2>Q-2: Defference between SQL and NoSQL.</h2>
                <div className='d-flex derection-column '>
                    <div>
                    <h4>
                        SQL:
                    </h4>
                    <ul>
                        <li>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</li>
                        <li>These databases have fixed or static or predefined schema.</li>
                        <li>These databases are not suited for hierarchical data storage.</li>
                        <li>These databases are best suited for complex queries.</li>
                    </ul>
                    </div>
                    <div>
                    <h4>
                        NoSQL:
                    </h4>
                    <ul>
                        <li>Non-relational or distributed database system.</li>
                        <li>They have dynamic schema.</li>
                        <li>These databases are best suited for hierarchical data storage.</li>
                        <li>	These databases are not so good for complex queries.</li>
                    </ul>
                    </div>
            </div>
           </div>
           <div className='question'>
               <div>
                   <h2>Q-3: What is the purpose of jwt and how does it work?</h2>
                   <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a- server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                   <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
               </div>
           </div>
                
        </div>
    );
};

export default Blogs;