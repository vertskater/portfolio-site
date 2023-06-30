import TextContent from "./ITextContent";
interface IData {
  id: string;
  [key: string]: TextContent[] | string;
}
export default IData;
