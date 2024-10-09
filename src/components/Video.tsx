import ReactPlayer from "react-player"
import { Loader } from "lucide-react"
import {  useStore } from "../zustand-store"
import { useCurrentLesson } from "../hooks/useCurrentLesson"


export  function Video() {
  // const dispatch = useAppDispatch()
  const {next} = useStore()
  const isCurrentLoading = useStore( state => state.isLoading)

  const {currentLesson} = useCurrentLesson()
  // const isCurrentLoading = useSelectorApp( state => state.player.isLoading)

  function handlePlayerNext() {
    next()
  }


  return (
  <div className="w-full aspect-video">
    {
      isCurrentLoading && 
      <div className="flex h-full items-center justify-center">
        <Loader  className="w-6 h-6 text-zinc-400 animate-spin"/>
      </div>
    }
    {!isCurrentLoading && 
    <ReactPlayer 
      width="100%"
      height="100%"
      controls
      url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
      playing
      onEnded={handlePlayerNext}
    /> }
  </div>
  )
}
