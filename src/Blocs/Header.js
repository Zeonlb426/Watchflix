import Account from "../Components/Account"
import Logo from "../Components/Logo"
import Menu from "../Components/Menu"
import Search from "../Components/Search"

export default function Header() {

    return (
        <div className="w-full border-b border-neutral-700">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-12">
                        <Logo/>
                        <Menu/> 
                    </div>
                    <div className="flex items-center gap-6">
                        <Search/>
                        <Account/>
                    </div>
                </div>
            </div>
        </div>
    )
}