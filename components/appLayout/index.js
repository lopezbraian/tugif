import { Searcher } from "../Searcher"

export default function AppLayout({ children }) {
  return (
    <div>
      <div className="logo">
        <img src="/logo.png" alt="logo" width="64" height="64" />
      </div>
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
