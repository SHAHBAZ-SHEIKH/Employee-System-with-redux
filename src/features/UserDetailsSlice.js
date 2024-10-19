import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/// Add user in API
export const addUserDetails = createAsyncThunk("addData", async (data, { rejectWithValue }) => {
    const response = await fetch("https://670e17c0073307b4ee456cbc.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    try {
        const data = await response.json()
        return data
    } catch (error) {
        if (!response.ok) {
            return rejectWithValue(error)
        }

    }
})


// Get user from API

export const getData = createAsyncThunk("getData", async (_, { rejectWithValue }) => {
    const response = await fetch("https://670e17c0073307b4ee456cbc.mockapi.io/crud")
    try {
        const data = await response.json()
        return data
    } catch (error) {
        if (!response.ok) {
            return rejectWithValue(error)
        }

    }
})

// Delete user from API

export const deleteuser = createAsyncThunk("deleteData", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://670e17c0073307b4ee456cbc.mockapi.io/crud/${id}`, {
        method: "DELETE"
    })
    try {
        const data = await response.json()
        return data
    } catch (error) {
        if (!response.ok) {
            return rejectWithValue(error)
        }

    }
})

// Update user from API

export const updateUserDetails = createAsyncThunk("updateData", async (data, { rejectWithValue }) => {
    console.log("Data:", data)
    const response = await fetch(`https://670e17c0073307b4ee456cbc.mockapi.io/crud/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    try {
        const result = await response.json()
        return result
    } catch (error) {
        if (!response.ok) {
            return rejectWithValue(error)
        }
        
    }
    
})
   

const UserDetailsSlice = createSlice({
    name: 'userDetails',
    initialState: {
        users: []
    },

    extraReducers: (builder) => {
        builder
            .addCase(addUserDetails.fulfilled, (state, action) => {
                state.users.push(action.payload)
            })
            .addCase(addUserDetails.rejected, (state, action) => {
                console.log(action.payload)
            })

            .addCase(getData.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(getData.rejected, (state, action) => {
                console.log(action.payload)
            })
            .addCase(deleteuser.fulfilled,(state,action)=>{
                state.users = state.users.filter((user)=>user.id!==action.payload.id)
            })
            .addCase(deleteuser.rejected, (state, action) => {
                console.log(action.payload)
            })

            .addCase(updateUserDetails.fulfilled, (state, action) => {
                state.users = state.users.map((user) => user.id === action.payload.id ? action.payload : user)
            })
            .addCase(updateUserDetails.rejected, (state, action) => {
                console.log(action.payload)
            })

    }
})

export default UserDetailsSlice.reducer