import Link from "next/link";

function Layout() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/" style={{ textDecoration: "none" }}>
            <h1 style={{ color: "white" }}>Portfolio</h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Layout;
