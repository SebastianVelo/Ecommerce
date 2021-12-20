import Styles from "../../tailwind/Styles";
import StyleSheet from "../../tailwind/StyleSheet";

const page = Styles
    .builder()
    .add("h-screen")
    .getClassName();

const main = Styles
    .builder()
    .add("grid grid-cols-2 h-full py-2")
    .add("lg:grid-cols-3")
    .getClassName();

const offers = Styles
    .builder()
    .add("space-y-2 px-4 h-full overflow-y-auto col-span-2")
    .getClassName();

const map = Styles
    .builder()
    .add("h-full w-full hidden")
    .add("lg:block")
    .getClassName();

export default {
    page: StyleSheet(page, {
        main: StyleSheet(main, {
            offers: StyleSheet(offers),
            map: StyleSheet(map)
        })
    })
}