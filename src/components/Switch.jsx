import { useState } from "react"

function Switch() {

    const [ swtch, setSwtch] = useState(false)

    const swtchChange = () => {
        setSwtch(!swtch)
    }

    return(
        <button className='btn-switch' onClick={swtchChange}>
            <span className={swtch ? 'btn-deg' : ''}>F</span>
            <div className={swtch ? 'btn-inside' : 'btn-inside right'}></div>
            <span className={swtch ? '' : 'btn-deg'}>C</span>
        </button>
    )
    
}
export default Switch