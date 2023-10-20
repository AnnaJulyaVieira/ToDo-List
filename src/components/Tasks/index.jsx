import { Task } from '../Task';
// Importa o componente 'Task' de um arquivo chamado '../Task'.

import styles from './tasks.module.css';
// Importa os estilos CSS de um arquivo chamado 'tasks.module.css' e armazena-os na variável 'styles'.

export function Tasks({ tasks, onDelete, onComplete }) {
  // Declara uma função chamada 'Tasks' que é exportada como um componente React.
  // Ela aceita três propriedades: 'tasks', 'onDelete' e 'onComplete'.

  const tasksQuantity = tasks.length;
  // Calcula o número de tarefas (comprimento do array 'tasks') e armazena em 'tasksQuantity'.

  const completedTasks = tasks.filter(task => task.isCompleted).length;
  // Filtra as tarefas que estão marcadas como concluídas (com base na propriedade 'isCompleted')
  // e, em seguida, conta quantas tarefas foram filtradas. O resultado é armazenado em 'completedTasks'.

  return (
    // Início do retorno do componente JSX (a partir deste ponto, estamos retornando elementos JSX).
    <section className={styles.tasks}>
      {/* // Cria um elemento 'section' com a classe CSS definida em 'styles.tasks'. */}

      <header className={styles.header}>
        {/* // Cria um elemento 'header' com a classe CSS definida em 'styles.header'. */}

        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Tarefas concluídas</p>
          {/*  // Cria um elemento 'p' com o texto "Completed tasks" e uma classe CSS 'textPurple' definida em 'styles'. */}

          <span>{completedTasks} a {tasksQuantity}</span>
          {/*  // Cria um elemento 'span' que exibe a quantidade de tarefas concluídas e o total de tarefas. */}

        </div>
      </header>
      <div className={styles.list}>
        {/* // Cria um elemento 'div' com a classe CSS definida em 'styles.list'. */}

        {tasks.map((task) => (
          // Usa um método 'map' para percorrer o array de tarefas ('tasks').
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
          // Renderiza o componente 'Task' para cada tarefa no array 'tasks'.
         // Passa as propriedades 'key', 'task', 'onDelete' e 'onComplete' para o componente 'Task'.
        ))}

      </div>
    </section>
  );
}

