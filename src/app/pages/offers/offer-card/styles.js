import Styles from "../../../../tailwind/Styles";
import StyleSheet from "../../../../tailwind/StyleSheet";


const card = Styles
    .builder()
    .add("flex space-x-4 w-full py-4 px-2 bg-gray-900 text-white rounded-lg")
    .getClassName();

const wrapper = Styles
    .builder()
    .add("flex w-full")
    .add("flex-row justify-start")
    .add("md:flex-col md:justify-around")
    .getClassName();

const rowWrapper = Styles
    .builder()
    .add("flex justify-between w-full flex-col")
    .add("md:flex-row");

//Row top
const rowTop = Styles
    .builder()
    .merge(rowWrapper)
    .getClassName();

//Row bottom
const rowBottom = Styles
    .builder()
    .merge(rowWrapper)
    .add("text-sm hidden sm:flex")
    .getClassName();

export default {
    card: StyleSheet(card, {
        image: StyleSheet("rounded-md w-24 h-16"),
        wrapper: StyleSheet(wrapper, {
            rowTop: StyleSheet(rowTop, {
                title: StyleSheet("text-2xl"),
                salary: StyleSheet("text-lg text-green-300")
            }),
            rowBottom: StyleSheet(rowBottom, {
                spacedRow: StyleSheet("flex items-center justify-end space-x-4")
            })
        })
    })
};