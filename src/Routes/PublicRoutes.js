import { Routes, Route } from 'react-router-dom';
import HomePage from '../screens/HomePage/HomePage';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default PublicRoutes;
