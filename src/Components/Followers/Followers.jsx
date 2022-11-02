import React from 'react';

const Followers = () => {
    // fetch("https://api.github.com/users/IbrakhimIsmoiljon/followers")
    // .then((response) => {
    //   return response.json();
    // })
    // .then((data) => {
    //   console.log(data);
    // });
    return (
        <div style={{
            marginTop: "-650px",
            width: "65%",
            height: "650px",
            marginLeft: "500px",
            color: "#fff",
          }}>
            <h3 >Followers</h3>

            {/* <h3>{data}</h3> */}
        </div>
    );
};

export default Followers;