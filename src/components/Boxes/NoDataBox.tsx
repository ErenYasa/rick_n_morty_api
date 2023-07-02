import { NoDataBoxStyle } from '../../styles/components/Boxes/NoDataBoxStyle';
import { INoDataBox } from './interfaces/noDataBox.interface';

export default function NoDataBox({ text, customClass }: INoDataBox) {
    return <NoDataBoxStyle className={customClass}>{text}</NoDataBoxStyle>;
}
