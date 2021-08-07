import React from 'react';
import AgentBox from './AgentBox';
import agentimage1 from '../images/s1.png';
import agentimage2 from '../images/s2.png';
import agentimage3 from '../images/s3.png';

function Agent() {
    return (
        <div className='agent'>
            <div className="a-heading">
            <h1>Agent</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad modi repellendus, optio
                 eveniet eligendi molestiae?</p>
            </div>
            <div className="b-container">
                <AgentBox image={agentimage1} name="Ali" />
                <AgentBox image={agentimage2} name="Ali" />
                <AgentBox image={agentimage3} name="Ali" />
            </div>
        </div>
    )
}

export default Agent
