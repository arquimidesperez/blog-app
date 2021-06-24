import './Home.css'
import PostCards from '../../components/PostCards/PostCards'
import Layout from '../../components/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <PostCards />
      </div>
    </Layout>
  )
}

export default Home