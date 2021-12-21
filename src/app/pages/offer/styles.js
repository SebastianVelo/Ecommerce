import Styles from "../../../tailwind/Styles";
import StyleSheet from "../../../tailwind/StyleSheet";

const main = Styles
    .builder()
    .add("grid grid-cols-2 h-full py-2")
    .add("lg:grid-cols-3")
    .getClassName();

const map = Styles
    .builder()
    .add("h-full w-full hidden")
    .add("lg:block")
    .getClassName();

    
export default {
    page: StyleSheet("h-screen", {
        main: StyleSheet(main, {
            map: StyleSheet(map)
        })
    })
}