import {Navbar,Hero, Mission,Faculty,EduResource,Result,Testimonial,Gallery,Footer} from './components/index.js'
import {LoginFormProvider} from './components/loginFormContext.jsx'
import {ToastProvider} from './components/toastContext.jsx';


function App() {
 return (
    
    <LoginFormProvider>
    <ToastProvider>
      <Navbar />
      <Hero />
      <Mission/>
      <Faculty/>
      <EduResource/>
      <Result />
      <Testimonial/>
      <Gallery />
      <Footer />
    </ToastProvider>
    </LoginFormProvider>
    
  );
};
export default App;




