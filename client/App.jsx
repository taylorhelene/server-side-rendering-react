import React from "react";


export const App =({questions, answers, handleModifiedAnswerVotes})=>{
    return(
        <div className="container">
            <header className="page-header border  border-top-0 border-white">
            <h1 className="jumbotron text-center text-primary m-5">
                Question  and Answer tool 
            </h1>

            <div className=" w-10 h-10 border rounded float-end bg-warning bg-gradient object-fit-cover text-center">
                <h2>Total Votes <br/> ⭐</h2>
                <h2>{
                answers.map((answer)=>{
                    return answer.upvotes;
                }).reduce((accumulator, currentValue) => 
                { return accumulator + currentValue; })
                }
                </h2>
            </div>
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
                                <div key={answerId} className="row">
                                    <span className=" col-sm-4 m-1">
                                        {content} - {upvotes}
                                    </span>
                                    <button onClick={()=>handleModifiedAnswerVotes(answerId,1) } className="rounded-lg btn btn-primary col-sm-2 m-1 shadow-sm"> + </button>
                                    <button onClick={()=>handleModifiedAnswerVotes(answerId,-1) } className="rounded-lg btn btn-primary col-sm-2 m-1 shadow-sm"> - </button>
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