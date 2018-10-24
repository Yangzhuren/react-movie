import React from 'react';
import {Carousel} from 'antd'
import { connect } from 'dva';
import styles from './IndexPage.css';

const images = [require('../assets/c1.jpeg'),require('../assets/c2.jpg'),require('../assets/c3.jpg')]

class IndexPage extends React.Component{

  _renderImage (source){
    return (
      <img src={source} className={styles.img} alt='简介'/>
    )
  }

  render(){
    return (
      <div className={styles.normal}>
        <Carousel className={styles.carousel} autoplay>
        {images.map(this._renderImage)}
        </Carousel>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
