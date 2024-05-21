import { Fragment } from 'react';
import './App.css';
import useDataConsultation from './Hooks/useDataConsultation';
import useDataProfessional from './Hooks/useDataProfessional';
import { Button } from './components/Button';
import Evaluation from './components/Evaluation';
import Footer from './components/Footer';
import Graphic from './components/Graphic';
import Header from './components/Header';
import TableQuery from './components/Table';
import Title from './components/Title';
import { Container } from './styles';
import { Subtitle } from './components/Subtitle';

function App() {
  const { data: consultations, error: consultationError } = useDataConsultation();
  const { data: professionals, error: professionalsError } = useDataProfessional();

  if(consultationError || professionalsError){
    console.log("An error occurred in the request!")
  }

  return (
    <Fragment>
      <Header />
      <Container>
        <Title>Administrative area</Title>
        <Button>Register Experts</Button>
        <Title image='consultation'>Appointments of the day</Title>
        <TableQuery consultation={consultations}/>
        <Title image='graphic'>Monthly consultation by specialist doctor</Title>
        <Subtitle>Dez/22</Subtitle>
        <Graphic consultations={consultations} professionals={professionals}/>
        <Title image='review'>Expert Reviews</Title>
        <Evaluation professionals={professionals}/>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
