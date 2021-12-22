import Styles from "../../../tailwind/Styles";
import StyleSheet from "../../../tailwind/StyleSheet";

const main = Styles
    .builder()
    .add("grid grid-cols-4 h-full py-2")
    .getClassName();

const map = Styles
    .builder()
    .add("h-full w-full hidden")
    .add("lg:block lg:col-span-1")
    .add("2xl:col-span-2")
    .getClassName();

export default {
    page: StyleSheet("h-screen", {
        main: StyleSheet(main, {
            offers: StyleSheet("space-y-4 px-4 h-full overflow-y-auto col-span-4 lg:col-span-3 2xl:col-span-2"),
            map: StyleSheet(map)
        })
    })
}