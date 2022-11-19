import { NoteData } from '../App';
import NoteForm from './NoteForm';

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};

function NewNote({ onSubmit }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">NewNote</h1>
      <NoteForm onSubmit={onSubmit} />
    </>
  );
}

export default NewNote;
