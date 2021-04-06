import Logo from './assets/dhl2.png.webp'
import  './styles/header.css'
export default function Header() {
  return (
    <header className="header">
        <img src={Logo} alt="Logo" />
        <h1>Package Tracking</h1>
    </header>
  );
}