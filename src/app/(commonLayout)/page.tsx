import { getUser } from "../service/user/get.user";


export default async function Home() {

  const user = await getUser();
  console.log("User in home page: -", user)

  return (
    <div>
      hello
    </div>
  );
}
