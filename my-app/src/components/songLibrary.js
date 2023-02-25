import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Songs from './songs';
import NavigationBar from './navbar';


export default class SongLibrary extends React.Component {
    render() {
        let songs = [ 
            {
                title: "Abbey Road by The Beatles",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFV9oJ30-eK1Nii3DjeIygI5p-hG04UC2sHM-k9gVehWc4zmH0dRMZudaG_9_hMGOpgKw&usqp=CAU",
                songs: "Hits including Come Together, Something, Oh Darling ",
                reviews: []
            }, 
            {
                title: "White Album by The Beatles",
                image:  "https://www.covalentlogic.com/assets/images/newsroom/october2018/beatles-white-album.jpg",
                songs: "Hits including Dear Prudence, Glass Onion, While my Guitar Gently Weeps",            
                reviews: []
            },
            {
                title: "Revolver by The Beatles",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz26dxcv6xrB5CCpQito8qsaCApwN7WBlyesQMFA8ZLqgujjFZVlFff0zIdqLKwOjP5nA&usqp=CAU",
                songs: "Including Taxman, Yellow Submarine, For No One",
                reviews: [] 
            }
        ]

        let arr;
        arr = songs.map( (songs, index ) => 
            <Songs title={songs.title} plot={songs.songs} reviews={songs.reviews} image={songs.image} key={index} />
        ) 

        return (
            
            <div className="container">
                <NavigationBar />
                <div>
                    
                </div> <br /><br />
                
                <div>
                    {arr}
                </div>  
            </div>
       )
    } 
}

