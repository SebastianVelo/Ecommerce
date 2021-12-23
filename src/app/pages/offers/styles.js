import Styles from "../../../tailwind/Styles";
import StyleSheet from "../../../tailwind/StyleSheet";

const main = Styles
    .builder()
    .add("grid grid-cols-4 h-full")
    .getClassName();

const map = Styles
    .builder()
    .add("h-full w-full hidden")
    .add("lg:block lg:col-span-1")
    .getClassName();

export default {
    page: StyleSheet("bg-gray-800 flex flex-col", {
        main: StyleSheet(main, {
            offers: StyleSheet("lg:h-screen lg:overflow-y-scroll space-y-4 px-4 col-span-4 lg:col-span-3"),
            map: StyleSheet(map)
        })
    })
}