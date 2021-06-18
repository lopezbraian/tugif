import { Searcher } from "../Searcher"
import Link from "next/link"
export default function AppLayout({ children }) {
  return (
    <div>
      <Link href="/">
        <a>
          <div className="logo">
            <img src="/logo.png" alt="logo" width="64" height="64" />
          </div>
        </a>
      </Link>
      <Searcher />
      <main>{children}</main>
      <style jsx>{`
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}
