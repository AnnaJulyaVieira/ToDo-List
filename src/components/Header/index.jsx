import styles from './header.module.css';
// Importa os estilos CSS do arquivo 'header.module.css' e armazena-os na variável 'styles'.

import { AiOutlinePlusCircle } from 'react-icons/ai';
// Importa o ícone de adição (um ícone de um círculo com um sinal de '+' dentro) da biblioteca 'react-icons' e armazena-o na variável 'AiOutlinePlusCircle'.

import { useState } from 'react';
// Importa a função 'useState' da biblioteca 'react' para gerenciar o estado do componente.


export function Header({ handleAddTask }) {
  // Declara uma função chamada 'Header' que é exportada como um componente React.
  // Ela aceita uma propriedade 'handleAddTask', que é uma função para adicionar tarefas.

  const [title, setTitle] = useState('');
  // Declara um estado usando o hook 'useState'. Inicializa 'title' como uma string vazia e 'setTitle' como uma função para atualizar o estado.

  function handleSubmit(event) {
    event.preventDefault();
    // Impede o comportamento padrão de envio do formulário, que atualizaria a página.
  console.log("teste do handle" +event)
    handleAddTask(title);
    // Chama a função 'handleAddTask' passando o título da tarefa ('title') como argumento.

    setTitle('');
    // Limpa o título após a tarefa ter sido adicionada.

  }

  function onChangeTitle(event) {
      
    console.log(event)
    
    setTitle(event.target.value);
    

    // Atualiza o estado 'title' com o valor do campo de entrada sempre que o conteúdo do campo muda.

  }
  return (
    
    // Início do retorno do componente JSX (a partir deste ponto, estamos retornando elementos JSX).
    <header className={styles.header}>

       <h1 className={styles.nossaDupla}>Lista de tarefas</h1> 

      {/*  // Cria um elemento 'header' com a classe CSS definida em 'styles.header'.
     */}
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        {/*  // Cria um formulário com um evento 'onSubmit' que chama a função 'handleSubmit' quando o formulário é enviado.
      // O formulário tem a classe CSS definida em 'styles.newTaskForm'.
      */}
        <input placeholder="Adicione uma nova tarefa" type="text" onChange={onChangeTitle} value={title} className={styles.input} />
        {/*  // Cria um campo de entrada de texto. O atributo 'placeholder' define um texto de ajuda, 'type' define o tipo do campo, 'onChange' é um evento que chama a função 'onChangeTitle' quando o valor muda e 'value' é ligado ao estado 'title'. */}

        <button>ADD  <AiOutlinePlusCircle size={20} /></button>
        {/*   // Cria um botão com o texto "Create" e o ícone de adição ('AiOutlinePlusCircle') com um tamanho de 20 pixels. */}

      </form>


    </header>

  );

}
