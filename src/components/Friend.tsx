const Friend = ({imgSrc, pos}) => {
    let styles = "w-full"
    switch (pos) {
        case 7 :  styles += "rounded-bl-2xl"
            break;
        case 9 :  styles += "rounded-br-2xl"
    }
    return (
        <img className={styles} src={imgSrc} alt="Friend"/>
    );
};

export default Friend;