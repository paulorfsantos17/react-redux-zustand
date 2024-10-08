import { useSelectorApp } from "../store"

export  function Header() {
  const {currentLesson, currentModule} = useSelectorApp(state => {
    const  { currentLessonIndex, currentModuleIndex} = state.player
    
    const currentModule =  state.player.course.modules[currentModuleIndex]
    const currentLesson = state.player.course.modules[currentModuleIndex].lessons[currentLessonIndex]

    return {currentLesson, currentModule }
  })
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">Módulo - "{currentModule.title}"</span>
    </div>
  )
}
