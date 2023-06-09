import { useNavigate } from 'react-router-dom';
import * as Icon from '../components/Icons/Icons';
import { Button, Container, Title } from '../styles/Views/ErrorPageStyle';

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <Container>
            <Title>ERROR!</Title>
            <Button onClick={() => navigate('/')}>
                <Icon.BackSign width="31" height="35" />
                BACK TO HOME
            </Button>
        </Container>
    );
}
