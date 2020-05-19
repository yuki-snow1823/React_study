import Link from "next/link";
import Layout from "../components/Layout";
import Counter from "../components/Counter";

export default () => (
  <Layout header="Other" title="Other page.">
    <Counter />
    <hr />
    <div>
      <Link href="/">
        <button>&lt;&lt; Back to Top</button>
      </Link>
    </div>
  </Layout>
);
