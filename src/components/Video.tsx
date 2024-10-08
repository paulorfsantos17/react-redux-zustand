import ReactPlayer from "react-player"
import { next, useCurrentLesson } from "../store/slices/player"
import { useAppDispatch, useSelectorApp } from "../store"
import { Loader } from "lucide-react"


export  function Video() {
  const dispatch = useAppDispatch()

  const {currentLesson} = useCurrentLesson()
  const isCurrentLoading = useSelectorApp( state => state.player.isLoading)

  function handlePlayerNext() {
    dispatch(next())
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
