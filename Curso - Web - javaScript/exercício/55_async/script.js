function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => {data.json})
    .catch((error) => {console.log(error)});
}


async function showUserName(id) {
  const user = await getUser(id)

  console.log(`O nome do ${id}° usuário é ${user.data}`);
  // console.log(`O nome do ${id}° usuário é ${user.data.first_name}`);
}

showUserName(3)