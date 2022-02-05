import {useTheme} from "next-themes";

const ThemeChangerButton = () => {
    const {theme, setTheme} = useTheme();

    return (
        <div>
            {theme && theme === "light" && <button onClick={() => setTheme("dark")}>Dark Mode</button>}
            {theme && theme === "dark" && <button onClick={() => setTheme("light")}>Light Mode</button>}
        </div>
    );
};

export default ThemeChangerButton;
