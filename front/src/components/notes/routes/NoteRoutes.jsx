import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { NoteHomePage, NotesWelcom, NoteNew, NoteEdit } from "../"
import { NoteView } from "../NoteView"


export const NoteRoutes = () => {

  return (
    <Routes>

      <Route path="/" element={ <NoteHomePage /> }>

        <Route index element={ <NotesWelcom /> } />
        <Route path="mynote/viewnote" element={ <NoteView /> } />
        <Route path="mynote/newnote" element={ <NoteNew /> } />
        <Route path="mynote/:id" element={ <NoteEdit /> } />
        
      </Route>

      <Route path="/*" element={ <Navigate to="/" /> } />
      
    </Routes>
    
  )
}
