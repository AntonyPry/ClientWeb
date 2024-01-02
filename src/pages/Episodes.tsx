import { useEffect, useState } from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import axios from 'axios';

function Episodes() {
  interface DataType {
    name: string;
    air_date: string;
    episode: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Дата выхода',
      dataIndex: 'air_date',
      key: 'air_date',
    },
    {
      title: 'Номер',
      dataIndex: 'episode',
      key: 'episode',
    },
  ]

  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  const LIMIT_LIST_EPISODES = 10;
  const getEpisodes = async (page: number, limit: number) => {
    const list = new Array();
    for (let i = 1; i <= 10; i++){
      list.push((page-1)*limit+i)
    }
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${list.join(',')}`);
    const json = response;
    console.log(json);
    setDataSource(response.data);
  };

  useEffect(() => {
    getEpisodes(page, LIMIT_LIST_EPISODES);
  }, [page]);

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Назад
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page === 6}>Вперед</button>
      <p>{page}</p>
    </>
  );
}

export default Episodes