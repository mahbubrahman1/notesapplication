import NotesList from "./pages/NotesList";
import { Routes, Route } from 'react-router-dom';
import SingleNote from "./pages/SingleNote";

function App() {
  return (
    <div className="App">
      <h1>notes</h1>
      <Routes>
        <Route path='/' exact element={<NotesList />} />
        <Route path='/note/:id' element={<SingleNote />} />
      </Routes>
    </div>
  );
}

export default App;