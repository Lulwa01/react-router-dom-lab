// src/App.jsx
import { useState } from "react";
import MailboxList from "./components/MailboxList/MailboxList";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar"
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";


const App = (props) => {

  const [mailboxes, setMailBoxes] = useState([])

  const addBox = (formData) => {
    formData._id = mailboxes.length + 1
    setMailBoxes([...mailboxes, formData])
  }

  return (
    <>
    <NavBar />

    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>}/>
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}/>
      <Route path="/new-mailboxes" element={<MailboxForm addBox={addBox} />}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}/>
      <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
    </Routes>
    </>
  )


};

export default App;
