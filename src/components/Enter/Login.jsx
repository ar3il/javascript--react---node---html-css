export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginClick = () => {
        props.onLogin();
    };

    return (
        <form>
            <div className="register-box">
                <div className="input2">
                    <input type="text" id="username" name="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
                    <p></p>
                    <input type="password" id="password" name="password" placeholder="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
            </div>
            <button className="Login" onClick={handleLoginClick}>
                Login
            </button>
        </form>
    );
}