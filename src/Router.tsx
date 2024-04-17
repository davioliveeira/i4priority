import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { RegisterPage } from './pages/register';
import DashboardPage from './pages/dashboard';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}