// pages/[...slug].jsx
import { useRouter } from 'next/router';
import Head from 'next/head'

const CatchAllDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <title>Premiun Group Tours</title>
      </Head>
      <h1>Catch-All Detail Page</h1>
      <p>Slug segments:</p>
      <pre>{JSON.stringify(slug, null, 2)}</pre>
    </div>
  );
};

export default CatchAllDetailPage;
