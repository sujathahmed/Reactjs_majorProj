import React from 'react'
function Products(){
    return(
        <>
        <h2> <i> Our Products </i> </h2>
        <img src="product.png"/>
        <p>
        Our products includes a fully built website hosted on a server,<br/>
        Which can:
        <ol>
            <li> Display various client's pages such as:
                <ul>
                    <li> Home. </li>
                    <li> About page. </li>
                    <li> Services. </li>
                    <li> Products. </li>
                    <li> Contact's page. </li>
                </ul>
            </li>
            <li> Retrieve user's query and information through the forms and database facility. </li>
            <li> Update the contents of the website now-and-then based on the requirements. </li>
            <li> Handle faults and crashes if occured . </li>
            <li> Provide a secure way of communication among various parties .</li>
        </ol>
        and many more...
        </p>
        </>
    )
}

export default Products