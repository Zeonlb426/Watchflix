import { NavLink } from "react-router-dom";

export default function Menu() {
    const routes = [
        {path:'/', name:'Home'},
        {path:'/movies', name:'Movies'},
        {path:'/tv-show', name:'TV Show'},
        {path:'/video', name:'Video'},
        {path:'/faq', name:'FAQ'},
        {path:'/pricing', name:'Pricing'},
        {path:'/contact', name:'Contact Us'},
    ]

    return (
        <nav className="mx-8">
            <ul className="list-none text-white flex gap-4">
                {routes.map(
                    (route, index) => (
                        <li className="text-base" key={index}>
                            <NavLink className={({isActive}) => isActive ? "border-yellow-500 border-b-4 " : "border-transparent border-b-4 " } to={route.path}>
                                {route.name}
                            </NavLink>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
}