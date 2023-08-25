import styles from "@/app/contact/contact.module.css";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";

const contactOptions = [
  {
    icon: <MdEmail />,
    title: "Email",
    description: "Monday to Friday Expected",
    responseTime: "response time: 72 hours",
    linkText: "Send Email",
  },
  {
    icon: <MdVoiceChat />,
    title: "Live Chat",
    description: "Weekdays: 9 AM — 6 PM ET\nWeekends: 9 AM — 5 PM ET",
    responseTime: "Weekends: 9 AM — 5 PM ET",
    linkText: "Chat Now",
  },
  {
    icon: <MdForum />,
    title: "Community Forum",
    description: "Monday to Friday Expected",
    responseTime: "response time: 72 hours",
    linkText: "Ask The Community",
  },
];

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {contactOptions.map((option, index) => (
            <div className={styles.grid_card} key={index}>
              <i>{option.icon}</i>
              <h2>{option.title}</h2>
              <p>{option.description}</p>
              <p className={styles.last_para}>{option.responseTime}</p>
              <Link href="/">
                <span>{option.linkText} -&gt;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
