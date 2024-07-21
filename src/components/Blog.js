import React from 'react';
import './Blog.css';

const Blog = () => {
    const posts = [
        {
            title: "Concord Open Beta gameplay tips: Crew Roles, Skillful Loops, recommended Freegunners and more",
            author: "Gillen McAllister",
            date: "July 18, 2024",
            image: `${process.env.PUBLIC_URL}/images/im.webp`, 
            description: "Open Beta available from July 18 - 21.",
        },
        {
            title: "Mortal Kombat 1: Takeda’s disarming Brutality revealed",
            author: "Dominic Cianciolo",
            date: "July 18, 2024",
            image: `${process.env.PUBLIC_URL}/images/mortal.png`,
            description: "Takeda’s brutal move is sure to shake up the competition.",
        },
        {
            title: "Splitgate 2 portals over to PS5 and PS4 in 2025",
            author: "Ian Proulx",
            date: "July 18, 2024",
            image: `${process.env.PUBLIC_URL}/images/valo.png`,
            description: "Get ready for the next level of portal combat.",
        },
        {
            title: "PlayStation Plus Monthly Games for July: Borderlands 3, NHL 24, Among Us",
            author: "Adam Michel",
            date: "June 26, 2024",
            image: `${process.env.PUBLIC_URL}/images/play.webp`,
            description: "A great selection of games for PlayStation Plus members.",
        }
    ];

    return (
        <section className="blog">
            <video autoPlay muted loop className="background-video">
                <source src={`${process.env.PUBLIC_URL}/videos/backgroundh.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h2>Our Blog</h2>
                <div className="blog-list">
                    {posts.map((post, index) => (
                        <div className="blog-post" key={index}>
                            <img src={post.image} alt={post.title} />
                            <div className="post-info">
                                <h3>{post.title}</h3>
                                <p className="author">By {post.author} on {post.date}</p>
                                <p>{post.description}</p>
                                <a href="#" className="cta">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;