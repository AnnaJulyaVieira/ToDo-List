import styles from './task.module.css';
// Importa os estilos CSS do arquivo 'task.module.css' e armazena-os na variável 'styles'.

import { BsFillCheckCircleFill } from 'react-icons/bs';
// Importa o ícone de marcação de tarefa completa (um ícone de check) da biblioteca 'react-icons' e armazena-o na variável 'BsFillCheckCircleFill'.

import { TbTrash } from 'react-icons/tb';
// Importa o ícone de lixeira da biblioteca 'react-icons' e armazena-o na variável 'TbTrash'.

export function Task({ task, onDelete, onComplete }) {
// Declara uma função chamada 'Task' que é exportada como um componente React.
// Ela aceita três propriedades: 'task', 'onDelete' e 'onComplete'.

  return (
    // Início do retorno do componente JSX (a partir deste ponto, estamos retornando elementos JSX).
    <div className={styles.task}>
    {/* // Cria um elemento 'div' com a classe CSS definida em 'styles.task'. */}

      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
     {/*  // Cria um botão com a classe CSS definida em 'styles.checkContainer'.
      // Quando o botão é clicado, ele chama a função 'onComplete' e passa o ID da tarefa ('task.id') como argumento. */}

        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
       {/*  // Renderiza o ícone de marcação de tarefa completa ('BsFillCheckCircleFill') se a tarefa estiver marcada como concluída ('task.isCompleted').
        // Caso contrário, renderiza um elemento vazio ('<div />'). */}

      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
      {/* // Cria um elemento 'p' que exibe o título da tarefa.
      // Se a tarefa estiver marcada como concluída, aplica a classe CSS 'styles.textCompleted' para estilizar o texto. */}

        {task.title}

      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
     {/*   // Cria um botão com a classe CSS definida em 'styles.deleteButton'.
      // Quando o botão é clicado, ele chama a função 'onDelete' e passa o ID da tarefa ('task.id') como argumento.
     */}
        <TbTrash size={20} />
      </button>

    </div>
   
  );

}

