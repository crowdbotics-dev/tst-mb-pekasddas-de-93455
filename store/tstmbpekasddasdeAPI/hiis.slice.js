import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_hii_list = createAsyncThunk(
  "hiis/api_v1_hii_list",
  async payload => {
    const response = await apiService.api_v1_hii_list(payload)
    return response.data
  }
)
export const api_v1_hii_create = createAsyncThunk(
  "hiis/api_v1_hii_create",
  async payload => {
    const response = await apiService.api_v1_hii_create(payload)
    return response.data
  }
)
export const api_v1_hii_retrieve = createAsyncThunk(
  "hiis/api_v1_hii_retrieve",
  async payload => {
    const response = await apiService.api_v1_hii_retrieve(payload)
    return response.data
  }
)
export const api_v1_hii_update = createAsyncThunk(
  "hiis/api_v1_hii_update",
  async payload => {
    const response = await apiService.api_v1_hii_update(payload)
    return response.data
  }
)
export const api_v1_hii_partial_update = createAsyncThunk(
  "hiis/api_v1_hii_partial_update",
  async payload => {
    const response = await apiService.api_v1_hii_partial_update(payload)
    return response.data
  }
)
export const api_v1_hii_destroy = createAsyncThunk(
  "hiis/api_v1_hii_destroy",
  async payload => {
    const response = await apiService.api_v1_hii_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const hiisSlice = createSlice({
  name: "hiis",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_hii_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hii_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hii_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hii_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hii_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hii_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hii_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hii_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_hii_list,
  api_v1_hii_create,
  api_v1_hii_retrieve,
  api_v1_hii_update,
  api_v1_hii_partial_update,
  api_v1_hii_destroy,
  slice: hiisSlice
}
