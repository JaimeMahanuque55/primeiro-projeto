/////////////// Login via API JWT: Usando no Client-side //////////////


import axios from "axios";
import Head from "next/head"
import { useState } from "react"
import { Layout } from "../components/Layout"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);


  const login = async (email: string, password: string) => {
    ////// Etapas para login com JWT /////
    // 1.Pegar o CSRF
    // 2. Validar as Credenciais
    // 3. Verificar o Session

    const csrfReq = await axios.get('/api/auth/csrf');
    // Verificar se o Token veio bonitinho
    if (csrfReq.data.csrfToken) {
      const authReq = await axios.post('/api/auth/callback/credentials', {
        json: true,
        csrfToken: csrfReq.data.csrfToken,
        email,
        password
      });
      // Verificar se o status deu 200 e se deu 200 esta tudo certo
      if (authReq.status === 200) {
        const userData = await axios.get('/api/auth/session'); //Pegar a session para ver os dados
        if (userData.data.user) {
          return true;
        }
      }
    }

    // // Retorna false para tudo que der errado nas verificacoes acima

    return false;
  }

  const handleSubmit = async () => {

    if (!email || !password) {
      setErrorText('Preencha os campos.');
      return;
    }
    setErrorText('');
    setLoading(true);
    const logged = await login(email, password);
    setLoading(false);

    if (logged) {
      // setErrorText("Deu certo!")
      window.location.href = '/'; // Manda para a pagina inicial depois de logado
    } else {
      setErrorText("Acesso negado")
    }
  }

  return (
    <Layout>
      <div>
        <Head>
          <title>Login</title>
        </Head>
        <h1>Login API</h1>

        <input
          type="email"
          placeholder="Digite o seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Digite o sua senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={loading}
        />
        <button onClick={handleSubmit} disabled={loading}>Entrar</button>

        {errorText}
        {loading && "Carregando..."}
      </div>
    </Layout>
  )
}

export default Login;