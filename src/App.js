import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Main';
import Error from './pages/Error';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/mypage" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
