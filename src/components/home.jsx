import { useState } from "react"
import axios from 'axios'
import './home.css'
import Bookmarks from "./booknarks";


const bookmarkimages = [];
const Home = () => {
    const [keyword, setkeyword] = useState(null);
    const [bookmark, setBookmark] = useState(false)
    const [imgUrl, setimgUrl] = useState("");
    const handleClick = () => {
        console.log("after click");
        axios({

            // url: "https://api.unsplash.com/photos/?client_id=NiXnhv7gGVxG6BL5_3e0lzLjFyDeOuBKVBgOQURYq6o",
            // url : "https://api.unsplash.com/search/photos/?client_id=NiXnhv7gGVxG6BL5_3e0lzLjFyDeOuBKVBgOQURYq6o/?page=1&query=office",
            url: `https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=NiXnhv7gGVxG6BL5_3e0lzLjFyDeOuBKVBgOQURYq6o`,
            method: "GET",
            headers: {
                Authorization: "Client-ID  NiXnhv7gGVxG6BL5_3e0lzLjFyDeOuBKVBgOQURYq6o",
            },

        })
            .then((res) => { setimgUrl(res.data.results) })

            .catch((err) => { console.log(err); });
    }
    const handleBookmark = () => {
        setBookmark(true)
    }
    return (
        <>
            <div className="main-container">
                <h1>
                    React Photo Search
                    <button onClick={() => handleBookmark()} className="bookbtn"> Bookmarks</button>
                </h1>

                <div>
                    <input type="text" onChange={(e) => setkeyword(e.target.value)} value={keyword} placeholder="search free high resolution images" />
                    <button onClick={() => handleClick()}>search</button>
                    {bookmark ? <Bookmarks bookmarkimages={bookmarkimages} setBookmark={setBookmark} /> : ""}
                    <div>
                        <h3>Click on the image to add</h3>
                        {
                            imgUrl && imgUrl?.map((data) => {

                                return (
                                    <>
                                        <img src={data.urls.regular} alt="pic" className="img" onClick={() => {
                                            bookmarkimages.push(data.urls.regular) ;
                                            alert("image is added")
                                        }} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home