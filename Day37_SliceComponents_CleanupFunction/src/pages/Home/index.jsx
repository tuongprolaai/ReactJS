import { useState } from "react";
import Modal from "../../components/Modal";

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <h1>Home page component</h1>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
        <button onClick={() => setIsOpen(false)}>Close modal</button>
        <Modal isOpen={isOpen} onRequestClose={()=>setIsOpen(false)}>
          <form action="">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button type="submit">Register</button>
          </form>
        </Modal>
      </div>
    );
}

export default Home;
