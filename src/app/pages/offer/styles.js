import Styles from "../../../tailwind/Styles";
import StyleSheet from "../../../tailwind/StyleSheet";

const main = Styles
    .builder()
    .add("grid grid-cols-2 h-full py-2")
    .add("lg:grid-cols-4")
    .getClassName();

const map = Styles
    .builder()
    .add("h-full w-full hidden col-span-1")
    .add("lg:block")
    .getClassName();

    
export default {
    page: StyleSheet("max-h-screen overflow-y-auto bg-gray-800", {
        main: StyleSheet(main, {
            map: StyleSheet(map)
        })
    })
}