import {useTheme} from "next-themes";

const ThemeChangerButton = () => {
    const {theme, setTheme} = useTheme();

    return (
        <>
            {theme && theme === "light" && (
                <button className="iconBtn" onClick={() => setTheme("dark")}>
                    <span className="material-icons">
                        &#xe51c;
                    </span>
                </button>
            )}
            {theme && theme === "dark" && (
                <button className="iconBtn" onClick={() => setTheme("light")}>
                    <span className="material-icons">
                        &#xe518;
                    </span>
                </button>
            )}
        </>
    );
};

export default ThemeChangerButton;
