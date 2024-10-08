import { configureStore} from '@reduxjs/toolkit'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { player } from './slices/player';



export const store = configureStore({
  reducer:  {
    player
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch: () => AppDispatch =  useDispatch