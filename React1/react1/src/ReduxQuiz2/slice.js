import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'posts/fetchUsers',
    async(_, {rejectWithValue}) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            return data;

        } catch (error) {
            return rejectWithValue('내용을 불러오는 것에 실패하였습니다.');
        }
    }
);

const userSlice = createSlice({

    // localStorage에 배열/객체 자료를 저장하고 다시 가져오는 방법은
    // JSON을 통해 문자형태로 바꿔주고 다시 배열/객체 형태로 변환하여 가져와야한다.
    name: 'user',
    initialState: {
        users: [],
        status: 'idle',
        error: null,
        selectedUser: JSON.parse(localStorage.getItem('selectedUser'))
    },

    reducers: {
        selectUser: (state, action) => {
            state.selectedUser = action.payload;
            localStorage.setItem('selectedUser', JSON.stringify(action.payload));
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.loading = 'failed';
            });
    }
});

export const { selectUser } = userSlice.actions;
export default userSlice.reducer;