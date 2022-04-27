import logo from './logo.svg';
import React, {useState,useEffect} from 'react';
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from './components/Calendar';
import './App.css';


function App() {
  const [showModal, setShow] = useState(false);
  const [itemModal,setItemModal] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const clickHandler = (item) => {
    setItemModal(item)
    setShow(true)
  }


  const local_json = [{"id":"ee02f9d6-415b-449a-b2eb-d92420e71060","title":"Quis repellat assumenda sit aut.","description":"Laboriosam earum qui. Qui reprehenderit quis dolores sed iusto ab. Sed saepe est et ab ducimus est. Eos et nam quidem.","date":"27.06.2022","timeStart":"09:27","timeEnd":"12:01","calendar":"Work"},{"id":"24e11288-e292-4c2f-bd4b-90ae84a7b219","title":"Repudiandae ducimus nam soluta.","description":"Omnis error corporis corrupti. Qui doloribus tempora. Et aut id quo aliquam aut ut ut. Sit et saepe ipsa est. Molestiae deleniti delectus esse.","date":"11.05.2022","timeStart":"01:00","timeEnd":"02:16","calendar":"Work"},{"id":"0e40ded7-e3bd-4f3f-ab5a-dd056d6fdbfd","title":"Sunt voluptates minus ducimus est.","description":"Quia molestiae et quaerat aliquid temporibus rerum ipsum. Nihil provident perspiciatis commodi recusandae et. Debitis cumque minus. Velit consequatur magnam eius iusto.","date":"22.06.2022","timeStart":"01:23","timeEnd":"02:32","calendar":"Sport"},{"id":"720af9eb-b1df-43a2-91a0-c8dc4046b221","title":"Minus assumenda ut sunt.","description":"Itaque et doloremque dolor quia excepturi et sequi. Est inventore quia. Sunt quis sit molestiae quod aliquid illo nemo. Voluptas error minus ea.","date":"03.06.2022","timeStart":"16:58","timeEnd":"18:14","calendar":"Work"},{"id":"8346e14f-37f1-4aaa-8915-2db8a00ad8cd","title":"Iure iure est omnis.","description":"Fuga quaerat ex illo nobis aliquid occaecati. Non quibusdam omnis quis officiis soluta. Doloribus mollitia consequatur dolorem ea facilis quo. Voluptas dignissimos vel.","date":"09.08.2022","timeStart":"04:16","timeEnd":"06:46","calendar":"Work"},{"id":"f462be9b-5497-4f6d-bb9f-e4ae2f0e3a89","title":"Ullam officia et illum incidunt.","description":"Est sint animi ad. Eius ducimus est sit aspernatur. Voluptas neque enim voluptas est qui laboriosam.","date":"08.06.2022","timeStart":"13:53","timeEnd":"16:43","calendar":"Sport"},{"id":"ebd1a438-4f3f-448b-b228-9dc1203537c4","title":"Nemo corrupti suscipit excepturi dignissimos.","description":"Odit nihil quasi totam. Ipsa adipisci quo inventore numquam ut adipisci vitae. Commodi est quos sed. Doloribus quae tempora omnis.","date":"20.05.2022","timeStart":"12:19","timeEnd":"15:05","calendar":"Work"},{"id":"a70256ae-6b72-4098-a02b-0badc8911713","title":"Et aliquid voluptatem doloribus.","description":"Et qui deserunt est. Excepturi in natus in quis quos accusamus. Molestias vero tempora consequatur deserunt eveniet officia quia.","date":"15.03.2022","timeStart":"12:29","timeEnd":"12:43","calendar":"Sport"}];
  const local_calendar = [{"name":"Work","color":"#fc3"},{"name":"Sport","color":"#69c"},{"name":"Home","color":"#9c9"}];

  const api_search = 'https://supsi-events.herokuapp.com/bff/events?search=';
  const url_calendars = 'https://supsi-events.herokuapp.com/bff/calendars';
  const url_data = 'https://supsi-events.herokuapp.com/bff/events';

  return (
    <div>
      <Calendar url_data={url_data} url_calendars={url_calendars} search={api_search} clickHandler={clickHandler} searchBar={true} week={true} month={true}/>
      <p></p>
      <Calendar url_data={url_data} url_calendars={url_calendars} search={api_search} clickHandler={clickHandler} searchBar={false} week={true} month={false}/>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Evento in dettaglio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
          <p>Titolo: {itemModal.title}</p>
          <p>Descrizione: {itemModal.description}</p>
          <p>Calendar: {itemModal.calendar}</p>
          <p>Data: {itemModal.date}</p>
          <p>Ora inizio: {itemModal.timeStart}</p>
          <p>Ora fine: {itemModal.timeEnd}</p>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>

      
    </div>
  );
}

export default App;
