import { useContext } from "react";
import {ContextCkick} from './types/types'
import { ContextClick } from "./components/CounterProviders/ContextClick";

const useClickContext = (): ContextCkick => {
    const context = useContext(ContextClick);
    
    if (context === undefined) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    
    return context;
};

export default  useClickContext
