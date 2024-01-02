import { useEffect, useState } from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import axios from 'axios';

function Locations() {
  interface DataType {
    name: string;
    dimension: string;
    type: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Измерение',
      dataIndex: 'dimension',
      key: 'dimension',
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
    },
  ]

  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  const LIMIT_LIST_LOCATIONS = 10;
  const getLocations = async (page: number, limit: number) => {
    const list = new Array();
    for (let i = 1; i <= 10; i++){
      list.push((page-1)*limit+i)
    }
    const response = await axios.get(`https://rickandmortyapi.com/api/location/${list.join(',')}`);
    const json = response;
    console.log(json);
    setDataSource(response.data);
  };

  useEffect(() => {
    getLocations(page, LIMIT_LIST_LOCATIONS);
  }, [page]);

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Назад
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page === 13}>Вперед</button>
      <p>{page}</p>
    </>
  );
}

export default Locations