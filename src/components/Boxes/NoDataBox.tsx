import { NoDataBoxStyle } from '../../styles/components/Boxes/NoDataBoxStyle';
import { INoDataBox } from './interfaces/noDataBox.interface';

export default function NoDataBox({ text }: INoDataBox) {
    return <NoDataBoxStyle>{text}</NoDataBoxStyle>;
}
