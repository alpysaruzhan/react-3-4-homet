import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

export const BlogCard = ({
    title,
    text,
    date,
    liked,
    likePost,
    deletePost
    }) =>{

        const hfill = liked ? "crimson" : "blue"


        return(
            <div className="ty">
                <h3>{title}</h3>
                <p>{text}</p>
                <p className="data">Дата публикации:{date}</p>
                <div className="butt">
                <div>
                    <button className="heart" onClick={likePost}  >
                        <FavoriteIcon  style={{fill: hfill}}/>
                        </button>
                </div>
                <button onClick={deletePost} className="u">
                &#10006;
                </button>
                </div>
                </div>
        );

};