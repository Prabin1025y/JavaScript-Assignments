/* You will create a function that simulates fetching user data from two different sources. The function should combine the results and return a single object with all the user information. You will use Promises to handle the asynchronous operations.
    
    Instructions
    1. **Create two mock data fetching functions:**
        - `fetchUserProfile(userId)`: This function simulates fetching a user profile.
        - `fetchUserPosts(userId)`: This function simulates fetching user posts.
    2. **Create a function `getUserData(userId)` that:**
        - Fetches the user profile and user posts using the above mock data fetching functions.
        - Combines the results into a single object.
        - Returns a Promise that resolves with the combined user data.
    3. **Handle errors gracefully.** 
*/

const fetchUserProfile = userId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId == 1) resolve({ userId: 1, Name: "Prabin ACharya", Address: "Dharan-8, Sunsari" });
      else reject("No Users Found Having Provided User Id!");
    });
  }, 2000);
};

const fetchUserPosts = userId => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId == 1) resolve({ post: "I love JavaScript. It's Awesome!" });
      else reject("No Posts Found!");
    });
  }, 1000);
};

const getUserData = userId => {
  return new Promise((resolve, reject) => {
    fetchUserProfile(userId)
      .then(profile => {
        fetchUserPosts(userId)
          .then(post => {
            resolve({ ...profile, ...post });
          })
          .catch(e => reject(e));
      })
      .catch(e => reject(e));
  });
};

getUserData(1)
  .then(userData => console.log(userData))
  .catch(e => console.error(e));

getUserData(2)
  .then(userData => console.log(userData))
  .catch(e => console.error(e));
