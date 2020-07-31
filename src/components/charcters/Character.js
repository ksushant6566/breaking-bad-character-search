import React, { useState } from 'react'

const Charcter = ({item}) => {
    const [toggleHover , setToggleHover] = useState(false);


    const toggle = ()=> {
        toggleHover === false ? setToggleHover(true) : setToggleHover(false);
    }

    return (
        <div onMouseEnter={toggle} onMouseLeave={toggle} className="card">
               <div className="cardimg">
                    <img src={item.img} alt='' />
               </div>
            <div className={toggleHover === true ? "cardtextHover" : "cardtext"}>
                <h1 className="charName" >{item.name.toUpperCase()}</h1>
                <h3>Nickname: {item.nickname}</h3>
                <h3>Status: {item.status}</h3>
                <h3>Appearance: {item.appearance}</h3>
            </div>
        </div>
    )
}

export default Charcter