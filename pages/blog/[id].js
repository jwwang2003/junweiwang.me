import { useRouter } from 'next/router';

function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <p>
      Post:
      {id}
    </p>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { ... } } // See the "paths" section below
    ],
    fallback: true
  };
}

export default Post;
