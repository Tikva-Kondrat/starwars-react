import {ReactNode} from "react";

type Props = {
    children: ReactNode
}
const Text = ({children}: Props) => {
    return(
        <p className="context__text">{children}</p>
    );
};
export default Text;