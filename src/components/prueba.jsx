
// const Layout =({children}) => {
//     return (
//         <div>
//             Este es el Layout
//             <div>{children}</div>
//         </div>
//     )
// }

import { useState } from "react";

// export default Layout;


const EstaLloviendo = () => {
    
    const [llueve,setllueve] = useState(true);

    const cambiarLluvia = () => {
        setllueve(!llueve)
    };

    return (
        <div>
            <div>
                ¿Esta lloviendo?: {`${llueve}`} 
            </div>
        <br/>
        <button onClick={cambiarLluvia}>Cambiar</button>
        </div>
        
    )
}

export default EstaLloviendo;