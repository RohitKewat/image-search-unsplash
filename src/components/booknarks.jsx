

const Bookmarks = (props) => {
    console.log(props);
    return (
        <>
            <div className="book-mark">

                <h3>Book marks Images</h3>
                <div>
                    <button onClick={() => props.setBookmark(false)}>Hide Book marks images</button>
                </div>
                <div>
                    {props.bookmarkimages && props.bookmarkimages.map((data) => {

                        return (
                                <img src={data} alt="pic" className=" bookmark" />
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Bookmarks