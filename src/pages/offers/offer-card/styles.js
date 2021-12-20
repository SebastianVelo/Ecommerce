import Styles from "../../../tailwind/Styles";
import StyleSheet from "../../../tailwind/StyleSheet";


const card = Styles
    .builder()
    .add("flex space-x-4 w-full p-2 bg-gray-900 text-white rounded-lg")
    .getClassName();

const image = Styles
    .builder()
    .add("rounded-md w-24 h-16")
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

const title = Styles
    .builder()
    .add("text-2xl")
    .getClassName();

const salary = Styles
    .builder()
    .add("text-lg text-green-300")
    .getClassName();

//Row bottom
const rowBottom = Styles
    .builder()
    .merge(rowWrapper)
    .add("text-sm hidden sm:flex")
    .getClassName();

const spacedRow = Styles
    .builder()
    .add("flex items-center justify-end space-x-4")
    .getClassName();

export default {
    card: StyleSheet(card, {
        image: StyleSheet(image),
        wrapper: StyleSheet(wrapper, {
            rowTop: StyleSheet(rowTop, {
                title: StyleSheet(title),
                salary: StyleSheet(salary)
            }),
            rowBottom: StyleSheet(rowBottom, {
                spacedRow: StyleSheet(spacedRow)
            })
        })
    })
};