import { Link } from "react-router"

const MailboxList = props => {
    return (
        <>
        <h1>Mailbox List</h1>
        <ul>
            {props.mailboxes.map(mail => (
                <li>
                    <Link to={`/mailbox/${mail._id}`}>
                    {mail.name} 
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default MailboxList