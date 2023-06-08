import { getDatabase } from '@/api/notion';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { GetStaticProps } from 'next';

export default function About({
  title,
  data,
}: {
  title: string;
  data: PageObjectResponse[];
}) {
  console.log(data);

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {data.map((item) => {
          // 标题
          const title = item.properties?.Name.title[0].text.content;
          // 链接
          const link = item.properties?.URL.url;
          // 创建时间
          const created_time = item.created_time;
          return (
            <li key={item.id}>
              <a href={link} target='_blank'>
                {title}
              </a>

              {/* 时间 */}
              <span>{created_time}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// 获取数据
export const getStaticProps: GetStaticProps = async () => {
  // 获取notion数据
  const data = await getDatabase();

  return {
    props: {
      title: 'about',
      data,
    },
  };
};
