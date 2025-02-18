import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({

    name: 'comments',
    initialState: {
        id: 1,
        text: '멋진 게시물이네요!',
        author: 'user1',
        timestamp: new Date(),
        likes: 0,
        teplies: []
    },
    reducers: {
        
        addComment: (state, action) => {
            state.items.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },

        removeComment: (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload);
        }
    }
});

export const { addComment, removeComment } = commentSlice.actions;
export default commentSlice.reducer;