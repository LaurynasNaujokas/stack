import React from 'react';

export default function QuestionForm(props){
    return (
        <div>
        <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    value={props.value.title}
                    name="title"
                    onChange={props.onChange}
                    placeholder="Enter your title"
                />
                <input
                    type="text"
                    value={props.value.subtitle}
                    name="subtitle"
                    onChange={props.onChange}
                    placeholder="Enter your subtitle"
                />
                <input
                    type="text"
                    value={props.value.category}
                    name="category"
                    onChange={props.onChange}
                    placeholder="Choose category"
                />
                <button onClick={props.handleSubmit}>Submit</button>
            </form>
            </div>
    )
}