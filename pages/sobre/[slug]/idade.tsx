import { useRouter } from "next/router";

const Idade = () => {

  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>{slug} tem 20 anos</div>
  )
}

export default Idade;