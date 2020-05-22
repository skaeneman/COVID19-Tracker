import React, { Component, useEffect } from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login';
import Navigation from './Navigation';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import StateSearch from './search/StateSearch';
import Footer from './Footer';
import { fetchData } from '../api/';
import InfectedCard from './cards/InfectedCard';
import DeathCard from './cards/DeathCard';
import RecoveredCard from './cards/RecoveredCard';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function HomeDataAnimations() {

    useEffect(() => {
      Aos.init({duration: 2000}); // milliseconds for each animation to complete
    }, []);

  return (
    <div>
      
      <section data-aos="fade-up">
        <Card>
          <Card.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec nulla pretium, fringilla risus a, viverra velit. Maecenas congue sapien eu justo egestas malesuada. Vivamus massa mauris, venenatis at tristique quis, pellentesque ac quam. In tincidunt enim nec ipsum finibus, ac ultricies est dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec vulputate id justo quis tempus. Mauris felis augue, dictum vel eros a, pretium mattis massa. Ut eget mauris nec mauris maximus hendrerit in et sem. Nam urna mi, tincidunt nec sodales ac, sodales id massa. Praesent non mauris eget elit scelerisque convallis dictum vitae neque. Sed vitae dolor blandit, scelerisque arcu vitae, dapibus leo. Fusce efficitur volutpat mollis. Pellentesque euismod lorem eu lacus aliquet, nec euismod urna convallis.
          </Card.Body>
        </Card>
      </section><br />
      <div data-aos="fade-up">
        <Card>
          <Card.Body>
            Sed maximus laoreet ante, eget tincidunt ligula egestas at. Donec sem lorem, commodo nec eleifend vel, pharetra scelerisque nibh. Etiam rhoncus consequat porta. In convallis sed ex sed fringilla. Nam eget mauris turpis. Donec accumsan dignissim hendrerit. Donec arcu mauris, vestibulum id enim sit amet, cursus euismod nisi. Donec turpis nibh, pretium ut mi in, tincidunt tempus orci. Duis in feugiat odio, quis lobortis nisl. Ut accumsan tempor vehicula. Donec dictum finibus posuere. Morbi ultricies condimentum nisi at vehicula.
          </Card.Body>
        </Card>
      </div><br />
      <div data-aos="fade-up">
        <Card>
          <Card.Body>
            Vivamus eget faucibus tortor, ac dignissim neque. Proin vitae consequat magna. Nunc malesuada ultricies augue in venenatis. Sed pellentesque, leo et convallis consectetur, enim leo congue purus, eget imperdiet libero quam id metus. Vivamus quis venenatis nulla. Vestibulum dapibus, nunc nec molestie aliquam, dolor mauris hendrerit magna, eget efficitur dolor elit in purus. Phasellus tempus consequat purus, sit amet volutpat mauris auctor vestibulum. Mauris consequat neque vel enim sollicitudin rutrum. Integer condimentum, eros et aliquet elementum, risus lectus porttitor lorem, et auctor velit odio pharetra quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean tincidunt a lorem tristique lobortis. Vestibulum ullamcorper nisi lectus, id hendrerit odio interdum ut. Sed ultricies diam sapien, a ultrices ante luctus ac. Curabitur nulla augue, rutrum ac viverra a, tincidunt et arcu. Quisque lacinia mi vitae commodo molestie. Aliquam erat volutpat.            
          </Card.Body>
        </Card>
      </div><br />
      <div data-aos="fade-up">
        <Card>
          <Card.Body>
            Pellentesque et consequat quam. Aenean quis cursus sem. Mauris in nisi ut arcu tincidunt ullamcorper. Vestibulum at accumsan enim. Etiam pellentesque dolor ac iaculis scelerisque. Aliquam et viverra sem. Vivamus urna ligula, tempor sed dolor auctor, sodales maximus dui. Quisque luctus varius quam sed hendrerit. Nam auctor quam eget interdum suscipit. Cras sed ornare turpis. Suspendisse sed consequat ipsum. Cras ornare arcu molestie, convallis est sed, porta lacus. Duis sit amet lorem sem. Etiam pellentesque purus lacus, in iaculis risus rutrum ut.            
          </Card.Body>
        </Card>
      </div>

    </div>
  )
}


