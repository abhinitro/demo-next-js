import 'bootstrap/dist/css/bootstrap.min.css';
import Meta from '../containers/Meta';
import DefaultHeader from '../containers/DefaultHeader.js';
import DefaultLayout from '../containers/DefaultLayout.js';
import Examples from '../components/example';


function Home() {
    return <div >
     <Meta/>
    
   <DefaultLayout>
   <div className="about_us">
            <h1 className="set-text-center">
              Home    
            </h1>
            <code className="">
             Just General Set Up of Next Js We are adding some more cool things in this repo soon  
           
            </code>
            <Examples/>
          </div>
         
       </DefaultLayout>
    
    </div>
  }
  
  export default Home