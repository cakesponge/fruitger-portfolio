import dayjs from "dayjs"; //external import

import { navLinks ,  navIcons} from "#constants/index.js"; //importing navLinks array


const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Navbar"/>
                <p className="font-bold">Wesley's Portfolio</p>

                <ul>
                    {navLinks.map(({id, name}) =>( //maps through navLinks array
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} className = "icon-hover"
                            alt={`icon-${id}`}/>
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    );
};

export default Navbar;