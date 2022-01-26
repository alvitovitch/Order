import React from "react";


class MemberRoles extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        debugger
        const Roles = Object.values(this.props.server.roles).map(role => {
            return(
                <div>
                    <h1>{role.name}</h1>
                    <div>
                        {Object.values(this.props.server.members).map(member => {
                            if (member.role === role.name){
                                return <div>
                                    <img className='roleAvatar' src={window.userAvatar} alt="userAvatar" />
                                    {member.username}
                                    </div>
                            }})}
                    </div>
                </div>
            )
        })
        return(
            <div id='membersRoles'>
                {Roles}
            </div>
    )
    }
}

export default MemberRoles