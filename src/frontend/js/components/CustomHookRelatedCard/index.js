import React, { useState, useEffect } from 'react';
import useFruits from '../HookCard/useFruits';

const CustomHookRelatedCard = () => {


    const [fruits, inRequest, isLoaded] = useFruits();
   
    

    return <div style={{"border":"1px solid red"}}>
            
            {inRequest && <span>фрукты CustomHookRelatedCard грузятся...</span>}
            {!inRequest && isLoaded && <div>
            <pre>{JSON.stringify(fruits,null,4)}</pre>
            </div>}
           </div>

}


export default CustomHookRelatedCard;