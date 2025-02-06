import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

export default function Footer() {
    return (
        <footer>
            <div>
                <p className="read-the-docs">
                    This application brought to you by Vite and React. Click the logos to learn more
                </p>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://github.com/hongfetti" target="_blank">
                    <img src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png' className="logo" alt="Github logo" />
                </a>
            </div>
        </footer>
    );
}