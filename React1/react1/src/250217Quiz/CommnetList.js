function CommentList({ comments, removeComment }) {

    return (
        <>
            {comments.map((comment, index) => (
                <li key={index}>
                    {comment} 
                    <button onClick={() => removeComment(index)}>삭제</button>
                </li>
            ))}
        </>
    );
}

export default CommentList;
