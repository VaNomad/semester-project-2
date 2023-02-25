



export async function register(regURL, data) {
  try {
    const userReg = {
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
      method: "post",
      body: JSON.stringify(data),
    };

    const response = await fetch(regURL, userReg);
    console.log(response);

    alert("You are now registered");
    window.location.replace("/login.html");

  } catch (error) {
    console.log(error);
  }
}

