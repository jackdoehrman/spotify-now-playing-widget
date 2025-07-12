import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
      style={{
        padding: "5rem",
        height: "350vh",
        width: "350vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>Spotify now playing widget</h2>
        <br />
        <p>
          Navigate to <Link href="/api/now-playing">/api/now-playing</Link>
        </p>
      </div>
    </main>
  );
}
