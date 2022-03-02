import React from 'react';
import './Home.css';
import axios from "axios";
import { RiGoogleLine } from "react-icons/ri";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

function Home() {
    const baseURL = "https://restcountries.com/v2/all?fields=name,region,flag  ";
    const [post, setPost] = React.useState([]);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
    console.log('post', post)

    return (
        <div className='homeContainer'>
            <div className='homeMain'>
                <div className='header'>
                    <h4>Countries</h4>
                </div>
                <div className='gridContainer'>
                    {post.map((value, i) => {
                        return (
                            <div className='gridList' key={i}>
                                <div className='grid' >
                                    <img className='flagImg' src={value.flag} />
                                    <div className='textContainer'>
                                        <p className='countryText'>{value.name}</p>
                                        <p className='regionText'>{value.region}</p>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
            <div className='lineContainer'>
                <div className='iconeContainer'>
                    <div className='icone1'>
                        <div className='icone'>
                            <RiGoogleLine />
                        </div>
                    </div>
                    <div className='icone1'>
                        <div className='icone'>
                            <FiFacebook />
                        </div>
                    </div>
                    <div className='icone1'>
                        <div className='icone'>
                            <FiLinkedin />
                        </div>
                    </div>
                    <div className='icone1'>
                        <div className='icone'>
                            <FiTwitter />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <p>Example@email.com</p>
                <p>Copyright &#169; 2020 Name. All reserved.</p>
            </div>
        </div>
    )
}

export default Home