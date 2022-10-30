import "./register.css"

export default function Register(){
    return(
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">AthleteHub</h3>
                    <span className="registerDesc"> Join us today!</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input placeholder="Password" className="registerInput" />
                        <input placeholder="Password Again" className="registerInput" />
                        <button className="registerButton">Create New Account</button>
                        <button className="registerLogInButton">Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}