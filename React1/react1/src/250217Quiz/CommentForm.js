import { useState } from "react";
import CommentList from './CommnetList';

function CommentForm() {
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim()) {
            setComments([...comments, text]);
            setText('');
        }
    };

    const removeComment = (index) => {
        setComments(comments.filter((comments, i) => i !== index));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" disabled={!text.trim()}>추가</button>
            </form>
            
            <ul>
                <CommentList comments={comments} removeComment={removeComment} />
            </ul>
        </>
    );
}

export default CommentForm;
