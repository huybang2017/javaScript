// Nếu thêm async, thì function sẽ return về 1 Promise
// Giá trị return bên trong hàm là giá trị resolve của Promise
async function getData() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

  // Khi đặt await trước 1 promise thì nó sẽ block cho đến khi promise đó được resolve (tương đương fulfilled)
  // Lưu ý: await chỉ được sử dụng bên trong function có khai báo async
  const data = await promise;
  console.log("data:", data);
  return data;
}

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("OK")
//     }, 2000)
//   });
// }

// getData().then((data) => {
//   console.log(data);
// });

// Sử dụng async await cho call API
async function main() {
  try {
    // axios trả về 1 object response {status, data, headers, ...}
    const { data: user } = await axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users/1",
    });
    // console.log(user);

    const [postsData, todosData] = await Promise.all([
      axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
      }),
      axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`,
      }),
    ]);

    console.log(postsData.data, todosData.data);

    // const { data: posts } = await axios({
    //   method: "GET",
    //   url: `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
    // });
    // console.log(posts);

    // const { data: todos } = await axios({
    //   method: "GET",
    //   url: `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`,
    // });
    // console.log(todos);
  } catch (error) {
    console.log(error);
  }
}
main();
