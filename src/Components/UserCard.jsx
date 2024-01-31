import React from 'react'

const userData = [
    {
        name: "Priyadharshini T",
        city: "Hosur",
        about: "Front End Developer",
        skills: ["HTML", "CSS", "Bootstrap"],
        online: true,
        image: "./images.jpg",
        github: "https://github.com/PriyaBalaDharshini",
        linkedin: "https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/"
    },
    {
        name: "Priyadharshini T",
        city: "Hosur",
        about: "Front End Developer",
        skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        online: true,
        image: "./images.jpg",
        github: "https://github.com/PriyaBalaDharshini",
        linkedin: "https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/"
    },
    {
        name: "Priyadharshini T",
        city: "Hosur",
        about: "Front End Developer",
        skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.JS"],
        online: true,
        image: "./images.jpg",
        github: "https://github.com/PriyaBalaDharshini",
        linkedin: "https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/"
    },
    {
        name: "Priyadharshini T",
        city: "Hosur",
        about: "Front End Developer",
        skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
        online: true,
        image: "./images.jpg",
        github: "https://github.com/PriyaBalaDharshini",
        linkedin: "https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/"
    },

]

function User(props) {
    return (
        <div className='card-container'>
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
            <img src={props.image} alt="" className="img" style={{ height: "100px", width: "100px" }} />
            <h3>{props.name}</h3>
            <h4>{props.city}</h4>
            <p>{props.about}</p>
            <div className="buttons">
                <button className="primary">
                    <a href={props.github}>Github</a>
                </button>
                <button className="primary outline">
                    <a href={props.linkedin}>LinkedIn</a>
                </button>
            </div>
            <div className="skills">
                <h5>Skills</h5>
                <ul>
                    {props.skills.map((skill, index) => <li key={index}>{skill}</li>)}

                </ul>
            </div>
        </div>
    )
}
const UserCard = () => (
    <>
        {userData.map((user, index) => (
            <User key={index}
                name={user.name}
                city={user.city}
                about={user.about}
                skills={user.skills}
                online={user.online}
                image={user.image}
                github={user.github}
                linkedin={user.linkedin}
            />
        ))
        }
    </>)

export default UserCard 