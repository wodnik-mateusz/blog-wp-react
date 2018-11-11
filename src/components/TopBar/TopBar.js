import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './TopBar.module.sass';
import SearchForm from '../Search/components/Form/Form';
import Socials from '../../widgets/Socials/Socials';

class TopBar extends Component {
  state = {
    name: '',
    description: '',
  };

  componentDidMount() {
    fetch('http://localhost/wp-json/')
      .then(res => res.json())
      .then(data => {
        const { name, description } = data;
        this.setState({ name, description });
      })
      .catch(console.error);
  }

  render() {
    const { name, description, social } = this.state;
    return (
      <article id="top" className={styles.container}>
        <span className={styles.description}>{description}</span>
        <Socials />
        <SearchForm className={styles.search} />
      </article>
    )
  }
}

export default TopBar;
