import React, {useState, useEffect} from 'react'
 import { FaDiceD20, FaTwitter,FaRegCopyright} from "react-icons/fa";
import { logo } from './assets';
const App = () => {
    const [quotes, setQuotes] = useState("")
     const year = new Date().getFullYear()
    const getQuotes = () => {
         fetch("https://type.fit/api/quotes")
         .then((response) => response.json())
         .then((data) => {
          let randomNum = Math.floor(Math.random() * data.length);
          setQuotes(data[randomNum]);
         })
    };
    useEffect(() => {
      getQuotes();
    }, []);

  return (
    <div className="app flex flex-col justify-center items-center text-center">
     
        
      <div className="card justify-center overflow-hidden py-[26px] px-9 w-[60%] max-[600px]:w-[80%] z-50">
      <div className='flex justify-center'>
          <img src={logo} alt="" className='logo_img drop-shadow-3xl w-[30%] max-[600px]:w-[50%] max-[400px]:w-[70%] mr-11 justify-center flex' />
        </div>
        <div className='h-[200px] max-[768px]:h-[200px] '>
          <h1 className="text-[29px]  max-[600px]:text-[20px]">❝{quotes.text}❞<span></span></h1>
        <h2 className="text-white pt-3 text-[30px] max-[600px]:text-[26px]">~{quotes.author}~</h2>
        </div>
        
                  <a onClick={getQuotes} href="#_" class=" ease-in-out duration-700 hover:shadow-[-1px_-2px_73px_0px_rgba(25,255,229,1)] relative  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-[#04ffd4] rounded-full  group">
<span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#04ff82] rounded-full blur-md ease"></span>
<span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#04ffd4] rounded-full blur-md"></span>
<span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#04ff82] rounded-full blur-md"></span>
</span>
<span class="relative text-[#000000] max-[600px]:text-[23px] text-[33px] "><FaDiceD20/></span>
</a>
<div>
<a  href={`https://twitter.com/intent/tweet?text=❝${quotes.text}❞ ~${quotes.author}~ Quote from www.google.com` }  class=" my-4 ease-in-out duration-700 hover:shadow-[-1px_-2px_73px_0px_rgba(4,230,255,1)] relative  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-[#04ffd4] rounded-full  group" target={'_blank'} rel="noreferrer">
<span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[rgb(4,230,255)] rounded-full blur-md ease"></span>
<span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#04c9ff] rounded-full blur-md"></span>
<span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#04e6ff] rounded-full blur-md"></span>
</span>
<span class="flex items-center relative text-[#000000] max-[600px]:text-[13px] text-[13px] "> <FaTwitter/> &nbsp; Tweet this quote</span>
</a>
        </div>

      </div>
      <div className='justify-center flex-col items-center  text-center'>
       
          <div className='text_b mt-1'>
            <h1 className=' text-[#e0ffa9] flex items-center justify-center max-[500px]:text-[12px]'>Copyright &nbsp; <FaRegCopyright/> &nbsp; {year} developed by Jordan Femi-Bella</h1>
          </div>
          
        </div>
    </div>
  );
}

export default App





// import React from 'react';
// import axios from 'axios';
// import { FaDiceD20} from "react-icons/fa";
// class App extends React.Component {
//     state = {
//       advice:'',
//     }
  
//     componentDidMount() {
//       this.fetchAdvice();
//     }
  
//     fetchAdvice = () => {
//       axios.get('https://api.adviceslip.com/advice')
//         .then((response) => {
//           const { advice } = response.data.slip;
  
//           this.setState({ advice });
//         })
//         .catch((error) => {
//           console.log(error);
//         });

        
//     }
  
//     render() {
//       return (
//         <div className="app flex justify-center items-center text-center">
//           <div className="card overflow-hidden py-32 px-9 w-[60%] max-[600px]:w-[80%]">
//             <h1 className="text-[40px] h-[200px] max-[600px]:text-[26px]">{this.state.advice}</h1>
//             <a onClick={this.fetchAdvice} href="#_" class=" ease-in-out duration-700 hover:shadow-[-1px_-2px_73px_0px_rgba(25,255,229,1)] relative  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-[#04ffd4] rounded-full  group">
// <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#04ff82] rounded-full blur-md ease"></span>
// <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
// <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#04ffd4] rounded-full blur-md"></span>
// <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#04ff82] rounded-full blur-md"></span>
// </span>
// <span class="relative text-[#000000] max-[600px]:text-[23px] text-[33px] "><FaDiceD20/></span>
// </a>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default App;
