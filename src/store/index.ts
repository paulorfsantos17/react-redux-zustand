import { configureStore} from '@reduxjs/toolkit'
import { useSelector, type TypedUseSelectorHook } from 'react-redux';



export const store = configureStore({
  reducer:  {
  }
})


export type RootState = ReturnType<typeof store.getState>
export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector