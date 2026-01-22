import useWindowStore from "#store/window.js";

const WindowControls = ({target}) => {

    const { closeWindow } = useWindowStore();
    return (
        <div id = "window-controls">

            <div className = "close" onClick = {() => closeWindow(target)} />
            <div classname = "minimize" />
            <div classname = "maximize" />

        </div>
    )
}

export default WindowControls;