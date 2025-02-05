const Friend = ({
    imgSrc,
    pos
}: any) => {
    let styles = "w-full"
    switch (pos) {
        case 7 :  styles += "rounded-bl-2xl"
            break;
        case 9 :  styles += "rounded-br-2xl"
    }
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <img className={styles} src={imgSrc} alt="Friend"/>
    );
};

export default Friend;