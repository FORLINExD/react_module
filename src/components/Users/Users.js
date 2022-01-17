import User from '../User/User'
import './Users.css'

const Users = ({users}) => {

    return (
        <div className={'users__container'}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;