import React from 'react'
import { ChevronRight } from "lucide-react";
import {skills} from '../Data'
import StackDisplay from '../Components/StackDisplay';

const Stack = () => {
  return (
    <div>
        <div className='grid grid-cols-2 gap-10 sm:grid-cols-4 sm:text-start'>  
            <StackDisplay data={skills} />
        </div>
    </div>
  )
}

export default Stack