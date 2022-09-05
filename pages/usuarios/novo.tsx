///////////// Usando a API no Client-Side 2 /////////////

// No client-side so posso fazer requisicoes com o endereco dessa api mesmo que a api seja propria
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import styles from '../../styles/UsuariosNovo.module.css';
import api from "../../libs/api";
import { User } from "../../types/User";



type Props = {
  users: User[];
}

const UsuariosNovo = () => {
  const router = useRouter();
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const handleSaveForm = async () => {
    if (nameInput && emailInput) {
      const req = await fetch(`/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameInput,
          email: emailInput
        })
      });
      const json = await req.json();
      if (json.status) {
        router.push('/usuarios')
      } else {
        alert(json.error)
      }
    }
  }

  return (
    <Layout>
      <div>
        <Head>
          <title>Usuarios - Novo</title>
        </Head>
        <h1>Pagina Usuarios - Novo</h1>

        <input
          className={styles.input}
          type="text"
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
          placeholder="Digite o nome do usuario"
        />
        <input
          className={styles.input}
          type="email"
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
          placeholder="Digite o email do usuario"
        />

        <button onClick={handleSaveForm}>Cadastrar</button>

      </div>
    </Layout>
  );
}

export default UsuariosNovo;