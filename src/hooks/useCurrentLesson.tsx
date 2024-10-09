import { useStore } from "../zustand-store"

export const useCurrentLesson = () => {
  const {currentModuleIndex, currentLessonIndex, course} = useStore()

  const currentModule = course?.modules[currentModuleIndex]
  const currentLesson = currentModule?.lessons[currentLessonIndex]

  return { currentModule, currentLesson }

}