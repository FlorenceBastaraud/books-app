import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <main className="page404">
      <div className="page404__wrapper wrapper">
        <h1 className="page404__wrapper--title title">Oops!</h1>
        <div className="page404__wrapper--description text">
          <p>
            It looks like you're lost. The page you are looking for is not here.
          </p>
          <p>
            Don't panic, you can always return to the &nbsp;
            <Link to="/" className="curved-underline">
              homepage
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Page404
