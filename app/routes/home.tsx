import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CVku" },
    { name: "description", content: "Never LOSE on your dream JOB!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg']) bg-cover">
    <Navbar />

    <section className="main-section">    
      <div className="page-heading">
        <h1>Track your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback</h2>
      </div>
    </section>
  </main>
}
