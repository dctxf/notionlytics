// 调用notion api 获取数据
import { NOTION_DATABASE_ID, NOTION_TOKEN } from '@/constants/notion';
import { Client } from '@notionhq/client';

// 初始化
const notion = new Client({
  auth: NOTION_TOKEN,
});

// 获取数据库数据
export const getDatabase = async () => {
  if (!NOTION_DATABASE_ID) {
    throw new Error('NOTION_DATABASE_ID is not defined');
  }
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
  });
  return response.results;
};
