//Users/antonypry/Documents/Учеба/Политех/3 семестр/Веб-клиент/web-client/src/pages/Characters_list.tsx
import { useEffect, useState } from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { CHARACTER_ROUTE } from '../app/routes/configs';

function Characters_list() {
  interface DataType {
    id: number;
    name: string;
    status: string;
    species: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Персонаж',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Род',
      dataIndex: 'species',
      key: 'species',
    },
    {
      title: 'Действия',
      key: 'action',
      render: (_text, record) => (
        <button onClick={() => handleCharacterDetails(record.id)}>Подробнее</button>
      ),
    },
  ]

  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  const LIMIT_LIST_CHARACTERS = 10;
  const getCharacters = async (page: number, limit: number) => {
    const character_list = new Array();
    for (let i = 1; i <= 10; i++){
      character_list.push((page-1)*limit+i)
    }
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${character_list.join(',')}`);
    const json = response.data;
    console.log(json);
    setDataSource(response.data);
  };

  const navigate = useNavigate();

  const handleCharacterDetails = (characterId: number) => {
    navigate(`/${CHARACTER_ROUTE}/${characterId}`);
  };


  useEffect(() => {
    getCharacters(page, LIMIT_LIST_CHARACTERS);
  }, [page]);

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Назад</button>
      <button onClick={() => setPage(page + 1)} disabled={page === 83}>Вперед</button>
      <p>{page}</p>
    </>
  );
}

export default Characters_list