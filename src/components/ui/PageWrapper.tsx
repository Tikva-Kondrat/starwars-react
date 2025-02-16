import {useContext, useEffect} from "react";
import {defaultCharacterShortName} from "../../storage/constants.ts";
import {useParams} from "react-router";
import {ErrorContext, SWContext} from "../../shared_data/context.ts";
import {characters} from "../../api/constants.ts";
import NotFoundPage from "../NotFoundPage.tsx";

const PageWrapper = (WrappedComponent: React.FunctionComponent) => {
  return  (props: any) => {

    const {shortName = defaultCharacterShortName} = useParams();
    const {changeHero} = useContext(SWContext);
    const {setIsWrongRoute} = useContext(ErrorContext);

    useEffect(() => {
      if (!characters.has(shortName)) {
        setIsWrongRoute(true);
        return
      }
      setIsWrongRoute(false);
      changeHero(shortName);
    }, [shortName]);

    return characters.has(shortName) ? (
      <WrappedComponent {...props} />
    ) : <NotFoundPage/>
  };
};
export default PageWrapper;

