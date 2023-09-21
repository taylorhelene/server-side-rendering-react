import React from "react";

export const App =({questions, answers, handleModifiedAnswerVotes})=>{
    return(
        <div>
            <h1>
                Q & A tool
            </h1>
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
                                    <button onClick={()=>handleModifiedAnswerVotes(answerId,1) }>+</button>
                                    <button onClick={()=>handleModifiedAnswerVotes(answerId,-1) }>-</button>
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