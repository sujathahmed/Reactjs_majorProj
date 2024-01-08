import React from 'react'
const hstyle={
    color:'white'
    
};
function Home(){ /* mybg for backgroung image and contentbg for heading-texts  */ 
    return(
        <>
        <div className="mybg" > 
        <div className='contentbg'>
        <h6> . </h6>   
        <h1 style= { hstyle }> <u> <i> THE WEB CHEF </i> </u> </h1>
        <h4 style= { hstyle }> Garnish your wishings...  </h4> 
        <h2> . </h2>
        <h2 style= { hstyle }>  GREETINGS... </h2> 
        <h3 style= { hstyle }> WANT TO BUILD A SINGLE PAGE WEBSITE ?</h3>  
        <h3 style= { hstyle }> BINGO ! YOU ARE AT THE RIGHT PLACE. </h3>
        <h2> . </h2>
        <h3 style= { hstyle }> START EXPLORING OUR WIDE RANGE OF SERVICES, </h3>
        <h3 style= { hstyle }> MAKE YOUR PRESENCE ON THE WEB. </h3>
        </div>
        </div>
        </>
    )
}

export default Home