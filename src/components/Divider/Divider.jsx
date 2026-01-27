import "@/components/Divider/divider.css";

function Divider() {
  return (
    <div className="divider">
      <span className="diamond edge" />
      
      <div className="track">
        <span className="diamond moving" />
      </div>

      <span className="diamond edge" />
    </div>
  );
}

export default Divider;
