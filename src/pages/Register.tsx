import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

function Register() {
  const [tasks, setTasks] = useState<IMyForm[]>([]);

  interface IMyForm {
    name: string;
    surname: string;
    age: number;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMyForm>({ mode: 'onBlur' });

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    setTasks((prev) => [...prev, data]);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(saveElement)}>
        <label>
          Имя:
          <input
            className="form-input"
            {...register('name', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 2,
                message: 'Имя не может содержать менее 2 букв',
              },
            })}
            type="text"
          ></input>
        </label>
        <div className="form-error">{errors.name?.message}</div>
        <label>
          Фамилия:
          <input
            className="form-input"
            {...register('surname', {
              required: 'Поле обязательно для заполнения',
              minLength: {
                value: 2,
                message: 'Фамилия не может содержать менее 2 букв',
              },
            })}
            type="text"
          ></input>
        </label>
        <div className="form-error">{errors.surname?.message}</div>
        <label>
          Возраст:
          <input
            className="form-input"
            {...register('age', {
              valueAsNumber: true,
              required: 'Поле обязательно для заполнения',
              min: {
                value: 18,
                message: 'Сайт только для совершеннолетних',
              },
            })}
            type="number"
          ></input>
        </label>
        <div className="form-error">{errors.age?.message}</div>
        <button className="form-btn" type="submit">
          Сохранить
        </button>
      </form>
      {tasks.map((task) => (
        <p>
          {task.name} - {task.surname} - {task.age}
        </p>
      ))}
    </>
  );
}

export default Register;
