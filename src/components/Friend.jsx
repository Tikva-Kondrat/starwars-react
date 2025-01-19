const Friend = ({imgSrc, pos}) => {
    let styles = "col-4 p-1 "
    switch (pos) {
        case 7 :  styles += "bottomLeft"
            break;
        case 9 :  styles += "bottomRight"
    }
    return (
        <img className={styles} src={imgSrc} alt="Friend"/>
    );
};

export default Friend;