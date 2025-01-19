import {Navbar,Hero, Mission,Faculty,EduResource,Result,Testimonial,Gallery,Footer} from './components/index.js'
import {LoginFormProvider} from './components/loginFormContext.jsx'
import {ToastProvider} from './components/toastContext.jsx';
// import { UserProvider } from './components/userContext.jsx';
import { AuthProvider } from './components/authContext.jsx';


function App() {
 return (
    <AuthProvider>
      <ToastProvider>
     <LoginFormProvider>

        <Navbar />
        <Hero />
        <Mission/>
        <Faculty/>
        <EduResource/>
        <Result />
        <Testimonial/>
        <Gallery />
        <Footer />
      </LoginFormProvider>
    </ToastProvider>
    </AuthProvider>
    
    
    
  );
};
export default App;




