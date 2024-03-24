import './App.css';
import { Features } from './components/Features';
import { LandingPageHeader } from './components/Header/LandingPageHeader';
import { Hero} from './components/Hero';

  
export function App() {
    return (
        <div>
            <LandingPageHeader/>
       <Hero  
       title= "Get Premium free for 7 days"
       amount = {'$232'}
       />
       <Features/>
       
        </div>

    );

}

export default App;
