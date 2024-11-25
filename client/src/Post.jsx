import React from 'react'

import article1 from './assets/article1.png';
import article2 from './assets/article2.jpg';
import article3 from './assets/article3.jpeg';
import article4 from './assets/article4.jpeg';
import article5 from './assets/article5.png';

const Post = () => {
  return (
    <div>
        <div className="post">
            <div className="image">
            <img src={article1} alt="" />
            </div>
            <div className="texts">
            <h2>Web Generations</h2>
            <p className="info">
                <a className="author">Jonathan William Gunawan</a>
                <time>2024-11-23 13:27</time>
            </p>
            <p className="summary">The internet has evolved through distinct generations, each transforming how we interact online. This chapter explores Web1, Web2, and Web3, highlighting their unique features and impact on digital connectivity.</p>
            </div>
        </div>
        <div className="post">
            <div className="image">
            <img src={article2} alt="" />
            </div>
            <div className="texts">
            <h2>The Core Features of Web3</h2>
            <p className="info">
                <a className="author">Vincent Oei</a>
                <time>2024-11-23 16:12</time>
            </p>
            <p className="summary">Web3 introduces transformative features that redefine how we interact with the digital world. This chapter delves into its core pillars: decentralization, user ownership of data, the role of tokens in fostering innovation, and the seamless interoperability between platforms.</p>
            </div>
        </div>
        <div className="post">
            <div className="image">
            <img src={article3} alt="" />
            </div>
            <div className="texts">
            <h2>How Web3 Works?</h2>
            <p className="info">
                <a className="author">Vincentius Jacob Gunawan</a>
                <time>2024-11-23 14:48</time>
            </p>
            <p className="summary">Web3 operates on decentralized networks, leveraging blockchain technology to enable secure, trustless interactions. This chapter explains the underlying mechanisms that power Web3.</p>
            </div>
        </div>
        <div className="post">
            <div className="image">
            <img src={article4} alt="" />
            </div>
            <div className="texts">
            <h2>Real World Applications of Web3</h2>
            <p className="info">
                <a className="author">Vincent Oei</a>
                <time>2024-11-23 17:09</time>
            </p>
            <p className="summary">Web3's innovations are already reshaping industries through practical applications. This chapter explores key examples, including NFTs for digital ownership, smart contracts for automated agreements, and DeFi for decentralized financial solutions.</p>
            </div>
        </div>
        <div className="post">
            <div className="image">
            <img src={article5} alt="" />
            </div>
            <div className="texts"> 
            <h2>Benefits and Challenges of Web3</h2>
            <p className="info">
                <a className="author">Vincentius Jacob Gunawan</a>
                <time>2024-11-23 19:56</time>
            </p>
            <p className="summary">Web3 introduces significant benefits by shifting control of data from centralized platforms to individual users. However, Web3 also faces challenges that hinder its widespread adoption.</p>
            </div>
        </div>
    </div>
  )
}

export default Post