import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Router';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Toaster } from 'react-hot-toast';
// ..
AOS.init()

function App() {
 
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
