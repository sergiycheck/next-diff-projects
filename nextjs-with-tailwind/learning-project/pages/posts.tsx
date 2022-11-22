import { Layout } from '../components/layout';
import { reqResApiBase } from './apiPath';
import { ResorceType, ResposeType } from './reqResTypes';

export async function getStaticProps() {
  const res = await fetch(`${reqResApiBase}/{resource}`);

  const { data } = (await res.json()) as ResposeType<ResorceType[]>;

  return {
    props: {
      resourceArr: data,
    },
  };
}

export default function Resource({
  resourceArr,
}: {
  resourceArr: ResorceType[];
}) {
  return (
    <Layout>
      <ul>
        {resourceArr.map((resource) => (
          <li key={resource.id}>{resource.name}</li>
        ))}
      </ul>
    </Layout>
  );
}
