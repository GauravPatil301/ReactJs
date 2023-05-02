import { useState } from "react";

const UserChallenge = () => {
  const [user,setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    setUser({name:'vegan food truck'});
  };
  const logout = () => {
    setUser(null);
  }
  return (
  <div>
    {user?
    (<div>
      <h4>hello there,{user.name}</h4>
      <button className="btn" onClick={logout}>login</button>
      </div>)
      :(<div>
        <h4>please login</h4>
        <button className="btn" onClick={login}>login</button>
        </div>)}
  </div>);
};

export default UserChallenge;
