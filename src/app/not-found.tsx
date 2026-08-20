import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section" style={{ textAlign: "center" }}>
      <div className="container">
        <h1 style={{ fontSize: "3rem" }}>404</h1>
        <p className="lead" style={{ margin: "1rem auto 2rem" }}>
          La página que buscas no existe.
        </p>
        <Link href="/" className="btn btn--primary">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}