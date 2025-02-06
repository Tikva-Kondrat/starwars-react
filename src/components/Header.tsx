import Navigation from "./Navigation.tsx";
import {SetPage} from "../types/types.t.ts";

const Header = ({changePage}: {changePage: SetPage}) => {
    return (
            <header className="rounded-t-2xl bg-grey-color">
                <Navigation changePage={changePage} />
                <h1 className="text-center text-3xl py-6">Luke Skywalker</h1>
            </header>
    );
};

export default Header;