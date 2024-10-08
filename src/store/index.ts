import { configureStore} from '@reduxjs/toolkit'
import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import { player } from './slices/player';



export const store = configureStore({
  reducer:  {
    player
  }
})


export type RootState = ReturnType<typeof store.getState>
export const useSelectorApp: TypedUseSelectorHook<RootState> = useSelector