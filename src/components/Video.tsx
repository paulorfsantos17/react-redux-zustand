import ReactPlayer from "react-player"
import { next, useCurrentLesson } from "../store/slices/player"
import { useAppDispatch } from "../store"


export  function Video() {
  const dispatch = useAppDispatch()

  const {currentLesson} = useCurrentLesson()

  function handlePlayerNext() {
    dispatch(next())
  }

  return (
  <div className="w-full aspect-video">
    <ReactPlayer 
      width="100%"
      height="100%"
      controls
      url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
      playing
      onEnded={handlePlayerNext}
    />
  </div>
  )
}
