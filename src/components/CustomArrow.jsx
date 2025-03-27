export function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "gray", paddingTop:"14px", height:"50px", borderRadius:"2px" }}
        onClick={onClick}
      />
    );
  }
  
export function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,background: "gray", paddingTop:"14px", height:"50px", borderRadius:"2px" }}
        onClick={onClick}
      />
    );
  }