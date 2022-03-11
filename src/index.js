import ReactDom from "react-dom";
import NavigationBar from "./NavigationBar";
import Main from "./Main";

function Application(){
    return (
        <div>
            <NavigationBar />
            <Main />
        </div>
    );

}

const application = Application();
const appElement = document.querySelector(".root");
ReactDom.render(application, appElement);