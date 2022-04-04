import React from 'react';
import "./Question.css"

const QUestion = () => {
    return (
        <div>
            <h1 className='pip'>Question answer...!</h1>
            <div className="center">
                <div className="f-question">
                    <h1>What is Semantic tags?</h1>
                    <p>Sementic tags are kind of like meaningfull HTML tags . These tags brings meaning to the webpage . When we write p tag we can understand , it means a paragrpah . The browser or computer can also understand this . Thats why its called a sementic tag.Simply,with sementic tags the browser understand what the websites wants to say.</p>
                </div>
                <div className="q-question">
                    <h1>What is context api?</h1>
                    <p>When we have to pass some data to child element from grandfather or higher elemnet , we have to pass the datas through prop on every layer . That means we have to pass the datas from grandfather to father , father to children (parent to child). But with "Context API" we can pass data to any child element of any higher order parent elements without having to pass datas in every layer . That menas we dont have to drill the props in every layer . We can compare "Context API" with a global variable for react components tree. "Context APi" share the data with every child element of the component tree and the child elements can use the data as well..</p>
                </div>
              
            </div>
        </div>
    );
};

export default QUestion;