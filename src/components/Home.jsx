import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Travel Website — Find Your Destination!</h1>

      {/* 大图 */}
      <img 
        src="https://picsum.photos/800/300?random=1" 
        alt="Beautiful View"
        style={{ width: "80%", borderRadius: "10px", marginTop: "20px" }}
      />

      {/* 快速入口 */}
      <div style={{ marginTop: "30px", fontSize: "20px" }}>
        <p><Link to="/destinations">◀ Destinations Recommended</Link></p>
        <p><Link to="/comment">◀ Share Your Experience</Link></p>
      </div>

      {/* 联系方式 */}
      <div style={{
        marginTop: "40px",
        padding: "20px",
        borderTop: "1px solid #ccc",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto"
      }}>
        <p>Contact Information: xxx-xxx-xxxx</p>
        <p>Email: example@gmail.com</p>
      </div>
    </div>
  );
}
