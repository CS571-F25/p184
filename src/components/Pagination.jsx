export default function Pagination({ currentPage, totalPages }) {
  return (
    <div style={{
      display: "flex",
      gap: "10px",
      marginTop: "20px",
      justifyContent: "center",
      fontSize: "18px"
    }}>
      
      <span style={{ cursor: "pointer" }}>{"<"}</span>

      <span style={{ fontWeight: currentPage === 1 ? "bold" : "normal" }}>
        1
      </span>
      <span>2</span>
      <span>3</span>
      <span>4</span>

      <span>...</span>

      <span>{totalPages}</span>

      <span style={{ cursor: "pointer" }}>{">"}</span>
    </div>
  );
}
