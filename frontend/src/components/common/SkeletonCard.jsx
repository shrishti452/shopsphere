import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
    return (
        <div
            style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
        >
            <Skeleton height={250} />

            <div style={{ marginTop: 15 }}>
                <Skeleton height={22} width="80%" />
            </div>

            <div style={{ marginTop: 10 }}>
                <Skeleton height={18} width="55%" />
            </div>

            <div style={{ marginTop: 15 }}>
                <Skeleton height={20} width="35%" />
            </div>

            <div style={{ marginTop: 20 }}>
                <Skeleton height={42} />
            </div>
        </div>
    );
};

export default SkeletonCard;