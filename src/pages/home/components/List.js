import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../style';

class List extends Component {
  render() {
    const { list } = this.props;
    
    return (
      <div>
        {
          list.map(item => {
            return (
              <Link to={`/detail/${item.id}`} key={item.id}>
                <ListItem>
                  <img className='pic' src={item.imgUrl} alt='' />
                  <ListInfo>
                    <h3 className='title'>{item.title}</h3>
                    <p className='desc'>{item.desc}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.list
  }
}

export default connect(mapStateToProps, null)(List)