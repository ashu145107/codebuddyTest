// level {1/2/3}
async function getData() {
    let apiCall = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await apiCall.json();
    return data;
  }

function getUsers(users) {
    let new_users = [];
  
    for (let i = 0; i < users.length; i = i + 1) {
      const newUser = user[i];
      newUser.id = i;
      new_users.push(newUser);
    }
    for(let i of users){
        let newUser = user[i];
        newUser.id = i;
        new_users.push(newUser);
    }
  
    return new_users;
  }
