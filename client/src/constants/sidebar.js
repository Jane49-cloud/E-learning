import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="nav flex-column nav-pills mt-2 border-red-50">
      <Link href="/user">
        <p className="nav-link active">Home</p>
      </Link>
      <Link href="/user">
        <p className="nav-link active">Home</p>
      </Link>
      <Link href="/user">
        <p className="nav-link active">Home</p>
      </Link>
      <Link href="/user">
        <p className="nav-link active">Home</p>
      </Link>
    </div>
  );
};

export default Sidebar;
