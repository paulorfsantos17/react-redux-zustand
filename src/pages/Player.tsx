import {  MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useSelectorApp } from "../store";
import { start, useCurrentLesson } from "../store/slices/player";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { api } from "../libs/axios";

export default function Player() {
  const modules = useSelectorApp (state => state.player.course?.modules)
  const dispatch = useDispatch()

  const {currentLesson} = useCurrentLesson()
  useEffect(() =>  {
    if(currentLesson) {
      document.title = currentLesson?.title
    }
    
  }, [currentLesson])

  async function getCourse() {
    const course = await api.get("/course/1")
    if(course) {
      dispatch(start(course.data))
    }
    
  }

  useEffect(() =>  {
    getCourse()
  }, [])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />
          

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-3 font-medium text-white hover:bg-violet-600">
            <MessageCircle  className="w-4 h-4"/>
            Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0  right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 
            overflow-y-auto  scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800"
          >
            {modules && modules.map((module, index) => {
              return <Module 
                key={module.id} 
                title={module.title} 
                amountOfLessons={module.lessons.length} 
                moduleIndex={index}
              />
            })}
          </aside>
        </main>
      </div>
    </div>
  )
}
