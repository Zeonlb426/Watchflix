import Logo from "./Logo"
import Menu from "./Menu"

export default function Header() {

    return (
        <div className="fixed z-10 w-full backdrop-blur-md  bg-black/40 border-b border-slate-600">
            <div className="flex items-center max-w-screen-2xl mx-auto h-20">
                <Logo/>
                <Menu/>
            </div>
        </div>
    )
}