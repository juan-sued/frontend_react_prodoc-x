import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../hooks/useAuth';
import Routes from '../Routes';
import GlobalStyles from '../styles/globalStyles/globalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
