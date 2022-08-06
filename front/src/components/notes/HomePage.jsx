import { Navigate, Route, Routes } from "react-router-dom"
import { NoteEdit } from "./NoteEdit"
import { NoteHomePage } from "./NoteHomePage"
import { NoteNew } from "./NoteNew"
import { NotesWelcom } from "./NotesWelcom"


export const HomePage = () => {
  return (
    <Routes>

      <Route path="/" element={ <NoteHomePage /> }>

        <Route index element={ <NotesWelcom /> } />
        <Route path="mynote/newnote" element={ <NoteNew /> } />
        <Route path="mynote/:id" element={ <NoteEdit /> } />
        
      </Route>

      <Route path="/*" element={ <Navigate to="/" /> } />
      
    </Routes>
    
  )
}
