import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link";

export function Body() {
  return (
    <div>
      <div class="container mt-5">
        <div class="jumbotron">
          <h1>Welcome to Unified Business Communication</h1>
          <p>Your one-stop solution for effective communication.</p>
          <Link class="btn btn-primary btn-lg" href="/" role="button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
