import NotesList from "./pages/NotesList";
import { Routes, Route } from 'react-router-dom';
import SingleNote from "./pages/SingleNote";
import './assets/sass/app.scss'

function App() {
  return (
    <div className="container">
      <div className="app">
        <Routes>
          <Route path='/' exact element={<NotesList />} />
          <Route path='/note/:id' element={<SingleNote />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;