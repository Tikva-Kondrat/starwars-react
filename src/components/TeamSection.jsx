import friend1 from "../assets/images-jpg/friend1.jpg"
import friend2 from "../assets/images-jpg/friend2.jpg"
import friend3 from "../assets/images-jpg/friend3.jpg"
import friend4 from "../assets/images-jpg/friend4.jpg"
import friend5 from "../assets/images-jpg/friend5.jpg"
import friend6 from "../assets/images-jpg/friend6.jpg"
import friend7 from "../assets/images-jpg/friend7.jpg"
import friend8 from "../assets/images-jpg/friend8.jpg"
import friend9 from "../assets/images-jpg/friend9.jpg"

const TeamSection = () => {
    return (
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-12 text-center">Dream team</h2>
            <img className="col-4 p-1" src={friend1} alt="Friend"/>
            <img className="col-4 p-1" src={friend2} alt="Friend"/>
            <img className="col-4 p-1" src={friend3} alt="Friend"/>
            <img className="col-4 p-1" src={friend4} alt="Friend"/>
            <img className="col-4 p-1" src={friend5} alt="Friend"/>
            <img className="col-4 p-1" src={friend6} alt="Friend"/>
            <img className="col-4 p-1 bottomLeft" src={friend7} alt="Friend"/>
            <img className="col-4 p-1" src={friend8} alt="Friend"/>
            <img className="col-4 p-1 bottomRight" src={friend9} alt="Friend"/>
        </section>
    );
};

export default TeamSection;