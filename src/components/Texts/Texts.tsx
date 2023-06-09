import { PageTitleStyle } from '../../styles/components/Texts/Texts';
import { ITexts } from './interfaces/texts.interface';

export const PageTitle = ({ children }: ITexts) => <PageTitleStyle>{children}</PageTitleStyle>;
