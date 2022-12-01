// Write your JS code here
import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  render() {
    const {blogsList} = this.props

    return (
      <>
        <div className="blog-item-container">
          <ul className="list-container">
            {blogsList.map(eachItem => (
              <BlogItem blogItemDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default BlogList
