async function checkValid() {
  const username = document.getElementById("username").value;
  const pass = document.getElementById("Pass").value;
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: pass,
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then((res)=> {
        if(res.token) {
            // Thanh cong
            // luu vao local storage
            localStorage.setItem("Username",res.username);
            localStorage.setItem("Email", res.email);
            localStorage.setItem("LastName",res.lastName);
            localStorage.setItem("FirstName",res.firstName);
            localStorage.setItem("imgAvata",res.image);
            // chuyen trang
            window.location.assign(`EditProfile.html`);
        } else {
            // Khong thanh cong
            alert("Login Invalid");
        }
        console.log(res);
    });
}
