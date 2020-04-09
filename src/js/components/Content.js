import React from 'react';
import MainPost from 'components/pieces/MainPost'
import Reply from 'components/pieces/Reply'
import Foot from 'components/Foot'

var Replies = []
for (let i = 0; i < 12; i++){
    Replies.push(<Reply/>)

}

const Content = () => {
	return (
        <article className="main-section">
            <MainPost/>
            {Replies}
            <Foot/>
        </article>
    )
}

export default Content;



