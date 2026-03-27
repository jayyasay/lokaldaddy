import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";

const details = [
  {
    icon: <FiMapPin />,
    title: "Location",
    content:
      "Easy to find, private, and comfortable setup.",
  },
  {
    icon: <FiClock />,
    title: "Availability",
    content: "Open daily for consultations and tattoo sessions.",
  },
  {
    icon: <FiPhone />,
    title: "Direct contact",
    content: "Message or call anytime and we'll get back to you.",
  },
];

const SmallBox = () => {
  return (
    <div className="contact-detail-stack">
      {details.map((item) => (
        <article key={item.title} className="contact-detail-card">
          <div className="feature-icon">{item.icon}</div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SmallBox;
