import React from 'react'
import ReactDOM from 'react-dom'
import { CommentDetail } from './CommentDetail'
import faker from '@faker-js/faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return(
    <div className="ui container comments">
        <ApprovalCard>
            Testers
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Dude" postTime="now" commentText="something" image={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Man" postTime="then" commentText="nothing" image={faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Bro" postTime="later" commentText="whatever" image={faker.image.avatar()}/>
        </ApprovalCard>
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))
