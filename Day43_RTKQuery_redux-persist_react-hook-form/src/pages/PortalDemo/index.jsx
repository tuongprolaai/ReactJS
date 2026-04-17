import Modal from "@/components/Modal";

function PortalDemo() {
  return (
    <div>
      <h1>Portal Demo</h1>
      {/* Component A */}
      <div onClick={() => alert("Clicked!")}>
        {/* Component B */}
        <div
          style={{
            width: 100,
            height: 100,
            transform: "scale(1.1)",
          }}
        >
          {/* Component C */}
          <div>
            <Modal isOpen>Modal Content</Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortalDemo;
