////////////////// Entendendo SSR na Pratica /////////////////

// import { Todo } from '../types/Todo';

// type Props = {
//   todo: Todo[]
// }

// const Todo = ({ todo }: Props) => {

//   return (
//     <div>
//       <h1>Lista de Tarefas</h1>

//       <ul>
//         {todo.map((todoItem, index) => (
//           <li key={index}>{todoItem.title} - {todoItem.completed.toString()}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Todo;

// export const getServerSideProps = async () => {
//   const req = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const todoList: Todo[] = await req.json();

//   return {
//     props: {
//       todo: todoList
//     }
//   }
// }

///////////// ENTENDENDO CSR NA PRATICA ///////////////////////
import { useEffect, useState } from 'react';
import { Todo } from '../types/Todo';



const Todo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    setLoading(true);
    const req = await fetch('https://jsonplaceholder.typicode.com/todos');
    const list: Todo[] = await req.json();
    setTodoList(list);
    setLoading(false);
  }


  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {loading && <div>Carregando</div>

      }

      <ul>
        {todoList.map((todoItem, index) => (
          <li key={index}>{todoItem.title} - {todoItem.completed.toString()}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;