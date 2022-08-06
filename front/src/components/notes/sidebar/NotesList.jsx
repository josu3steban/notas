import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveNote } from "../../../store/slices/note/noteSlice";
import { getNoteById } from "../../../store/slices/note/noteThunk";


export const NotesList = ( {note} ) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dateFormat = new Date(note.create);

  const handleSelectNote = ( id ) => {

    dispatch( setActiveNote( id ) );

    // dispatch( getNoteById( id ) );
    
    // navigate( `/mynote/${id}` );

    navigate( `/mynote/viewnote` );
    
  }
  
  return (
    
    <div
      onClick={ () => handleSelectNote(note._id) }

      className="

        sm:w-52
        sm:h-full
        sm:justify-between
        sm:break-words
        sm:mr-3
        sm:mb-0
        sm:overflow-x-visible
        sm:flex-shrink-0
        
        bg-white
        rounded-lg
        border-2
        border-my-color-five
        p-2
        cursor-pointer
        flex
        flex-col
        items-center
        mb-3

        h-40
        overflow-y-auto

        break-words
        
        
    ">

        <h3 className="text-lg font-medium sm:text-center">{note.title}</h3>
        <p className="text-sm w-full sm:w-full sm:text-center">{ note.description }</p>
        <p className="text-xs text-left text-gray-500 pt-3 w-full sm:w-full">creada: { `${dateFormat.getDate()}/${dateFormat.getMonth() + 1}/${dateFormat.getFullYear()} - ${dateFormat.getHours()}h:${dateFormat.getMinutes()}`}</p>
        
    </div>
    
  )
}
