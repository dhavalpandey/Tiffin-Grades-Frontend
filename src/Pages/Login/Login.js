import { GoogleLogin } from "react-google-login";
import { Helmet } from "react-helmet";

import "./Login.css";

export default function Login() {
  const loginFailure = (failResponse) => {
    alert("Login Failed, please try again");
    localStorage.clear();
    window.location.reload();
  };

  const loginSuccess = async (successResponse) => {
    //Fields stored in DataBase
    const googleId = successResponse.googleId;
    const email = successResponse.profileObj.email;
    const fullName = successResponse.profileObj.name;
    const firstName = successResponse.profileObj.givenName;
    const imageUrl = successResponse.profileObj.imageUrl.slice(8);

    //Adding to Local Storage
    localStorage.setItem("google_id", successResponse.googleId);
    localStorage.setItem("name", successResponse.profileObj.givenName);
    localStorage.setItem("image", successResponse.profileObj.imageUrl);

    const link = global.config.url;

    await fetch(link + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        googleId: googleId,
        email: email,
        fullName: fullName,
        firstName: firstName,
        imageUrl: imageUrl,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.status === "OK") {
          alert(res.message);
          window.location.reload();
        } else {
          alert(res.message);
          localStorage.clear();
          window.location.reload();
        }
      })
      .catch((error) => {
        loginFailure(error);
      });
  };

  return (
    <div className="login">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <GoogleLogin
        className="login-btn"
        clientId="1029185512831-qvr0he0tk57qv6t8mp35f7t200vnn8jb.apps.googleusercontent.com"
        onSuccess={loginSuccess}
        onFailure={loginFailure}
        buttonText="Login with Google"
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
