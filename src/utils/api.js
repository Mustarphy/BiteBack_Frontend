const token = await firebase.auth().currentUser.getIdToken();
fetch("https://biteback-backend-1.onrender.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify(newsData),
});
