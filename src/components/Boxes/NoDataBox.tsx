import { NoDataBoxStyle } from '../../styles/components/Boxes/NoDataBoxStyle';
import { INoDataBox } from './interfaces/noDataBox.interface';

export default function NoDataBox({ text, widthStatus }: INoDataBox) {
    return <NoDataBoxStyle widthStatus={widthStatus}>{text}</NoDataBoxStyle>;
}
