import Styles from "../../../tailwind/Styles";
import StyleSheet from "../../../tailwind/StyleSheet";

const button = Styles
    .builder()
    .add("text-xl")
    .getClassName();

const link = Styles
    .builder()
    .add("text-xl")
    .getClassName();


export default {
    link: StyleSheet(link),
    button: StyleSheet(button),
};