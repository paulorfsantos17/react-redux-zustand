import ReactPlayer from "react-player"
import { useSelectorApp } from "../store"


export  function Video() {
  const video = useSelectorApp(state => {
    const  { currentLessonIndex, currentModuleIndex} = state.player

    const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

    return currentLesson
  })
  return (
  <div className="w-full aspect-video">
    <ReactPlayer 
      width="100%"
      height="100%"
      controls
      url={`https://www.youtube.com/watch?v=${video.id}`}
    />
  </div>
  )
}
