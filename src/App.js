import logo from "./logo.svg";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
function App() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  const componentClicked = () => {
    console.log("click");
  };
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <FacebookLogin
        appId="641074900253440"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
      {/* <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      /> */}
      {/* <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        // icon={<TiSocialFacebookCircular />}
        icon="fa-facebook"
      /> */}
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      ,
    </div>
  );
}

export default App;
