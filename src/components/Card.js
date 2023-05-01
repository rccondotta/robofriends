import React from "react";

/* Return a single card component 

    Can also use (destructuring):
        const Card = ({name, email, id}) => {}
*/
const Card = (props) => {
    const { name, email, id } = props;

    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;