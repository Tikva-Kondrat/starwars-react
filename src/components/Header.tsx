// @ts-expect-error TS(6142): Module './Navigation.jsx' was resolved to 'C:/java... Remove this comment to see the full error message
import Navigation from "./Navigation.jsx";

const Header = ({
    changePage
}: any) => {
    return (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <header className="rounded-t-2xl bg-grey-color">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Navigation changePage={changePage} />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <h1 className="text-center text-3xl py-6">Luke Skywalker</h1>
            </header>
    );
};

export default Header;