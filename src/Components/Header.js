import Logo from "./Logo"
import Menu from "./Menu"

export default function Header() {

    return (
        <div className="flex items-center max-w-screen-2xl mx-auto pt-8">
            <Logo/>
            <Menu/>
        </div>
    )
}