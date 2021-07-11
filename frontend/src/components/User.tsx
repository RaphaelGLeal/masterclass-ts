import React from 'react';

interface IUser {
    name: string,
    email?: string;
}

interface Props {
    user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
    return(
        <div>
            <strong>None : </strong> {user.name} <br />
            <strong>E-Mail : </strong> {user.email || 'Não tem email' }  <br /><br />
        </div>
    );
};

export default User;