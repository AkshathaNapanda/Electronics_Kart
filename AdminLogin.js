import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const myStyle={
        backgroundImage: 
 "url('https://wallpapers.com/images/hd/electronics-circuit-board-parts-hcxpsphivocg6u84.jpg')",
        height:'100vh',
        // marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    const adminLogin = () => {
        if (username === "admin" && password === "123456") {
            sessionStorage.setItem("ID", "admin");
            sessionStorage.setItem("NAME", "Admin");
            sessionStorage.setItem("ROLE", "Admin");
            sessionStorage.setItem("EMAIL", "admin@gmail.com");
            sessionStorage.setItem("PHONE", "1111111111");
            sessionStorage.setItem("ADDRESS", "Mangalore");
            navigate("/admin/orders");
        }
        else {
            alert("Invalid Login Credentials");
        }
    }

    return (
        <div className=" vh-100 f4" style={myStyle} >
            <div className="d-flex justify-content-center f4">
                <div class="card w-25 my-5 f4">
                    <div class="card-header f4">
                        <h5>Admin Login</h5>
                    </div>
                    <div class="card-body">
                        <input type="text" placeholder="Username" className="form-control mb-3" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" className="form-control mb-3" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button type="button" className="btn btn-primary" onClick={adminLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;