import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// Style


// Layouts
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision'
import Service from './pages/Service'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vision" element={<Vision />} />
      <Route path="service" element={<Service />} />
      <Route path="contact-us" element={<Contact />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

