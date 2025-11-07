import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Router,
  RouterProvider,
} from 'react-router-dom';
import Header from './components/header';
import JobPage from './components/job';
import VacanciesPage from './components/Vacancies';
import Error from './components/Error';

function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px', backgroundColor: "#f6f6f7" , minHeight: '100vh' }}>
        <Outlet/>
      </main>
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<JobPage />} />
      <Route path="/vacancies/petersburg" element={<JobPage />} />
      <Route path="/vacancies/moscow" element={<JobPage />} />
      <Route path="/vacancies" element={<JobPage />} />
      <Route path="/vacancies/:id" element={<VacanciesPage />} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="*" element={<Error/>} />
    </Route>
  ),
  {
    basename: '/5.2.9-JanSil/',
  }
);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
