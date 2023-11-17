import { Navigate, Route, Routes } from 'react-router-dom';

function PrivateRoutes() {
  return (
    <Routes>
      <Route path='/private-route' element={<span>private route</span>} />

      <Route path='*' element={<Navigate to='/error/404' />} />
    </Routes>
  );
}

export { PrivateRoutes };
