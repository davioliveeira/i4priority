import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import DashboardPage, {loader as dashloader} from './pages/Dashboard/dashboard';
import TeamPage from './pages/Dashboard/manager-team';
import ListTicketPage, {loader as listloader} from './pages/Dashboard/listTickets';
import DashboardMainPage from './pages/Dashboard/root';


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
    element: <DashboardPage />,
    children: [
      {
        index: true,
        loader: dashloader,
        element: <DashboardMainPage/>
      },
      {
        path: 'manager-team',
        element: <TeamPage />,
      },
      {
        id: 'instagram',
        path: 'lista-chamados',
        loader:listloader,
        element: <ListTicketPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}