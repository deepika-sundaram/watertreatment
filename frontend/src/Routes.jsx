import { Routes as R1, Route } from "react-router-dom";
import {App} from './App' 

import {Home} from "./Home";
import {Admin} from "./Admin";
export function Routes()
{

return (
<R1>
        <Route path="/" element={<App />}/>
        
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        
      </R1>
)
}