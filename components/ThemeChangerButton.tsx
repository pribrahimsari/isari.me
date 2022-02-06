import {useTheme} from "next-themes";

const ThemeChangerButton = () => {
    const {theme, setTheme} = useTheme();

    return (
        <>
            {theme && theme === "light" && (
                <button className="iconBtn" onClick={() => setTheme("dark")}>
                    <i className="fa fa-moon"></i>
                </button>
            )}
            {theme && theme === "dark" && (
                <button className="iconBtn" onClick={() => setTheme("light")}>
                    <i className="fa fa-lightbulb"></i>
                </button>
            )}
        </>
    );
};

export default ThemeChangerButton;
