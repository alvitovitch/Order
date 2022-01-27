import React from "react";


class MemberRoles extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        const that = this
        const Roles = Object.values(this.props.server.roles).map(role => {
            return(
                <div className="memberRoles">
                    <h1 className="roleTitle">{role.name.toUpperCase()} - {Object.values(this.props.server.members).filter(member => member.role === role.name).length}</h1>
                    <div className="member">
                        {Object.values(this.props.server.members).map(member => {
                            if (member.role === role.name){
                                return <div className='roleMember' key={member.id}>
                                    <img className='roleAvatar' src={window.userAvatar} alt="userAvatar" />
                                    <div className='roleUsername'>
                                        {member.username}
                                    </div>
                                        
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