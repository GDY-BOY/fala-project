import { useRouter } from 'next/router';

export default function Home({ data }) {
  return (
    <div>
      <h1>Welcome</h1>
      {data?.videos?.map((video, i) => (
        <iframe key={i} src={`https://www.youtube.com/embed/${video}`} width="560" height="315" />
      ))}
      <p>{data?.text}</p>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos?id=${query.id}`);
  const data = await res.json();
  return { props: { data } };
}