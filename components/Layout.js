import Navbar from './navbar'
import Head from 'next/head'

import Footer from './Footer'
const Layout = (props) => (
    <div lang="en">
        <Head>
            <title></title>
            <link rel="shortcut icon" href="№" type="images/x-icon"/>
            <link href="../static/bootstrap.min.css" rel="stylesheet"/>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>     
        </Head>
        <Navbar />
        {props.children} 
        <Footer/>
    </div>
)



export default Layout