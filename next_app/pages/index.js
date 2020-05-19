import Link from "next/link";
import Layout from "../components/Layout";
import Image from "../static/Image";

export default () => (
  <Layout header="Next" title="Top page.">
    <p>Welcome to next.js!</p>
    {/* ここの名前がファイル名としてコンポーネントが読み込む */}
    {/* つまり、いつもこっちありき、こっちで決められる */}
    <Image fname="image.jpg" size="250" />
    <hr />
    <Link href="./other">
      <button>go to Other &gt;&gt;</button>
    </Link>
  </Layout>
);
