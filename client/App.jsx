import React from "react";


export const App =({questions, answers, handleModifiedAnswerVotes})=>{
    return(
        <div className="container">
            <header className="page-header">
            <h1 className="jumbotron text-center text-primary">
                Question  and Answer tool 
            </h1>
            </header>
            {questions.map(({questionId,content})=>{
                return(
                <div key={questionId}>
                    <h3>
                        {content}
                    </h3>
                    <div>
                        {answers.filter(answer=> answer.questionId=== questionId).map(({content,upvotes,answerId})=>{
                            return(
                                <div key={answerId}>
                                    <span>
                                        {content} - {upvotes}
                                    </span>
                                    <button onClick={()=>handleModifiedAnswerVotes(answerId,1) } className="well btn btn-primary">+</button>
                                    <button onClick={()=>handleModifiedAnswerVotes(answerId,-1) } className="well btn btn-primary">-</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
                );
            })}
        </div>
    )
}